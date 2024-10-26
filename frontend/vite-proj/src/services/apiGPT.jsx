export async function generateYesNoQuestions(topic) {
    const apiKey = 'YOUR_OPENAI_API_KEY'; // Replace with your OpenAI API key
    const apiUrl = 'https://api.openai.com/v1/chat/completions';

    const prompt = `Generate a list of yes/no questions that can help a medical professional investigate symptoms related to "${topic}". The questions should focus on clarifying potential associated symptoms or causes.`;

    const data = {
        model: 'gpt-4', // or 'gpt-4' if available
        messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: prompt }
        ],
        max_tokens: 150,
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
        console.error('Error generating questions:', error);
        throw error;
    }
}
