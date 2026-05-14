import dotenv from 'dotenv';
dotenv.config();

const CLIENT_ID = process.env.TWITCH_CLIENT_ID as string;
const CLIENT_SECRET = process.env.TWITCH_CLIENT_SECRET as string;

let accessToken: string | null = null;

async function getAccessToken(): Promise<string> {
    if (accessToken) return accessToken;
    
    const response = await fetch('https://id.twitch.tv/oauth2/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            grant_type: 'client_credentials'
        }),
    });

    const data = await response.json();
    accessToken = data.access_token;
    return accessToken as string;
}

async function getPastBroadcasts(userId: string) {
    const token = await getAccessToken();
    const response = await fetch(`https://api.twitch.tv/helix/videos?user_id=${userId}&type=archive&first=10`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Client-Id': CLIENT_ID
        }
    });
    const data = await response.json();
    return data.data; // Array of past broadcasts  
}

export { getAccessToken, getPastBroadcasts };