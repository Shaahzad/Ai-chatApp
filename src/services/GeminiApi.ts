import axios from "axios"
import { GEMINI_API_KEY } from '@env';
// console.log(GEMINI_API_KEY)
const BaseUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`
export const GeminiAiResponse = async(userMessage: string): Promise<String> => {
try {
    const res = await axios.post(`${BaseUrl}`, {
        contents: [{
            parts:[{
                text: userMessage
            }]
        }]
    })
    return res.data.candidates[0]?.content?.parts[0]?.text || 'No Response'
} catch (error) {
    console.log(error)
    return "Something Went Wrong"
}
}