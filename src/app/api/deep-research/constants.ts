// Research constants
export const MAX_ITERATIONS = 3; // Maximum number of iterations
export const MAX_SEARCH_RESULTS = 5; // Maximum number of search results
export const MAX_CONTENT_CHARS = 20000; // Maximum number of characters in the content
export const MAX_RETRY_ATTEMPTS = 3; // It is the number of times the model will try to call LLMs if it fails
export const RETRY_DELAY_MS = 1000; // It is the delay in milliseconds between retries for the model to call LLMs

// Model names
export const MODELS = {
  PLANNING: "nvidia/llama-3.1-nemotron-ultra-253b-v1:free",
  EXTRACTION: "nousresearch/deephermes-3-mistral-24b-preview:free",
  ANALYSIS: "deepseek/deepseek-r1:free",
  REPORT: "qwen/qwen2.5-vl-32b-instruct:free"
}; 