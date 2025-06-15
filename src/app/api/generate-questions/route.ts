import { NextResponse } from "next/server";
import { generateText } from 'ai';
import { createOpenRouter } from '@openrouter/ai-sdk-provider';

const openrouter = createOpenRouter({
    apiKey: process.env.OPENROUTER_API_KEY || "",
});

const DEFAULT_QUESTIONS = [
    "What specific aspects of protein structure are you most interested in (primary, secondary, tertiary, or quaternary structure)?",
    "Are you interested in the relationship between DNA and protein structure, or more focused on one particular aspect?",
    "Do you want to focus on experimental methods for determining protein/DNA structure or the biological significance of these structures?",
    "Are you interested in any specific proteins or genetic sequences for your research?"
];

const clarifyResearchGoals = async (topic: string) => {
    const prompt = `
    Given the research topic: ${topic}

    Generate 4 clarifying questions to help narrow down the research scope. Focus on identifying:
    - Specific aspects of interest
    - Required depth/complexity level
    - Particular perspective or methodologies
    - Potential applications or relevance

    Format your response as a JSON array of questions, like:
    ["Question 1?", "Question 2?", "Question 3?", "Question 4?"]
    `;

    try {
        const { text } = await generateText({
            model: openrouter("nvidia/llama-3.1-nemotron-ultra-253b-v1:free"),
            prompt,
        });

        // Try to parse JSON array from the response
        try {
            const jsonMatch = text.match(/\[.*?\]/);
            if (jsonMatch) {
                const questions = JSON.parse(jsonMatch[0]);
                if (Array.isArray(questions) && questions.length > 0) {
                    return questions;
                }
            }
            // If we couldn't parse JSON or it wasn't an array, fall back to default
            return DEFAULT_QUESTIONS;
        } catch (parseError) {
            console.log("Error parsing questions JSON:", parseError);
            return DEFAULT_QUESTIONS;
        }
    } catch (error) {
        console.log("Error while generating questions:", error);
        return DEFAULT_QUESTIONS;
    }
};

export async function POST(req: Request) {
    const { topic } = await req.json();
    console.log("Topic:", topic);

    try {
        const questions = await clarifyResearchGoals(topic);
        console.log("Questions:", questions);

        return NextResponse.json(questions || DEFAULT_QUESTIONS);
    } catch (error) {
        console.error("Error while generating questions:", error);
        return NextResponse.json(DEFAULT_QUESTIONS);
    }
}