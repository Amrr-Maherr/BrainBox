
import Config from 'react-native-config';
import axios from "axios";
import { GeminiResponse } from '@/types/RequsetType';
const API_KEY = Config.API_KEY
const FetchChat = async (chatMessage: string): Promise<GeminiResponse | null> => {
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
        return response.data
    } catch (error: any) {
        console.error(error);
        return error;
    }
}

export default FetchChat