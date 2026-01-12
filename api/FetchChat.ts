
import axios from "axios";
import { GeminiResponse } from '@/types/RequsetType';
const API_KEY = process.env.EXPO_PUBLIC_API_KEY
const FetchChat = async (chatMessage: string): Promise<GeminiResponse | { error: string } | null> => {
    try {
        const response = await axios.post(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
            {
                "contents": [
                    {
                        "parts": [
                            {
                                "text": "You are BrainBox, a friendly AI assistant. Always respond in clear, simple English or Arabic and be helpful, polite, and concise."
                            }
                        ]
                    },
                    {
                        "parts": [
                            { "text": chatMessage }
                        ]
                    }
                ]
            }
        )
        console.log('Server response:', response.data);
        return response.data
    } catch (error: any) {
        console.error('Error fetching chat:', error);
        if (error.response?.status === 429) {
            return { error: 'Rate limit exceeded. Please try again later.' };
        }
        return { error: 'Failed to fetch response. Please try again.' };
    }
}

export default FetchChat
