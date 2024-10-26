export async function generateYesNoQuestions(topic, limit = 10) {
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY; // Make sure this is correctly set in your .env file
    const apiUrl = 'https://api.openai.com/v1/chat/completions';

    const prompt = `
    Generate a list of ${limit} yes/no (very important) questions that could help a medical professional investigate symptoms related to "${topic}".
    The questions should clarify associated symptoms, potential causes, or factors that may narrow down the diagnosis.
    Format the response as a JSON array of strings, with each question as a separate string element.
    Example format: ["Question 1", "Question 2", ..., "Question ${limit}"]
    `;
    const data = {
        model: 'gpt-4',
        messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: prompt }
        ],
        max_tokens: 2000,
        temperature: 0.7
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const result = await response.json();
        return result.choices[0].message.content;
    } catch (error) {
        console.error('Failed to fetch questions:', error);
        throw error;
    }
}
