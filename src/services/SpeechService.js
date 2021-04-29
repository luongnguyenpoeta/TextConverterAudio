import axios from "axios";

export async function textToSpeech(input, speakerId) {
    const params = new URLSearchParams();
    params.append('input', input);
    params.append('encode_type', 1)
    params.append('encode_type', speakerId)

    const options = {
        headers: { 'apikey': 'eVm5Ztoy2fm5qZsI7E70LDGq1PZUU3sg' }
    };

    const response = await axios.post('https://api.zalo.ai/v1/tts/synthesize', params, options)

    console.log(response)
    return response.data.data.url
}