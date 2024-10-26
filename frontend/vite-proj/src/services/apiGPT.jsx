async function callChatGPTAPI(prompt) {
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
    const apiUrl = 'https://api.openai.com/v1/chat/completions';

    const data = {
        model: 'gpt-4o-mini',
        messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: prompt },
        ],
        max_tokens: 2000,
        temperature: 0.7,
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Error ${response.status}: ${errorText}`);
        }

        const result = await response.json();
        const content = result.choices[0].message.content;

        // Validate and parse JSON
        let parsedContent;
        try {
            parsedContent = JSON.parse(content.trim());
        } catch (parseError) {
            console.error('Failed to parse JSON response from ChatGPT:', parseError);
            throw new Error('Failed to parse JSON response from ChatGPT.');
        }

        return parsedContent;
    } catch (error) {
        console.error('Failed to fetch from ChatGPT API:', error);
        throw error; // Re-throw the error so it can be handled by the caller if needed
    }
}
// Function to generate yes/no questions
export async function generateYesNoQuestions(topic, limit = 10) {
    const prompt = `
    Generate a list of ${limit} yes/no (very important) questions that could help a medical professional investigate symptoms related to "${topic}".
    The questions should clarify associated symptoms, potential causes, or factors that may narrow down the diagnosis.
    Format the response as a JSON array of strings, with each question as a separate string element.
    Example format: ["Question 1", "Question 2", ..., "Question ${limit}"]
    Do not use any delimiters like \`\`\`json or other extra characters.
`;

    // Call the API and get the parsed JSON result
    const json_results = await callChatGPTAPI(prompt);
    console.log(json_results);
    return json_results;
}