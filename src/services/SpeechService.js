import axios from "axios";

export async function textToSpeech(input) {
    const params = new URLSearchParams();
    params.append('input', input);

    await axios.create({
        baseURL: 'https://api.zalo.ai/v1',
        //timeout: 1000,
        headers: { 'apikey': 'eVm5Ztoy2fm5qZsI7E70LDGq1PZUU3sg' }
    });

    const response = await axios.post('/tts/synthesize', params)

    console.log(response)
    return response.data.data.url
}