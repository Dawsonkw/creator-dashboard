import { get } from "node:http";
import { getPastBroadcasts } from "./twitchService";

export type Session = {
    id: string;
    date: string;
    title: string;
    durationMinutes: number;
}

function parseDuration(duration: string): number {
    const hours = duration.match(/(\d+)h/);
    const minutes = duration.match(/(\d+)m/);
    const seconds = duration.match(/(\d+)s/);

    const totalMinutes = 
        (hours ? parseInt(hours[1]) * 60 : 0) +
        (minutes ? parseInt(minutes[1]) : 0) +
        (seconds ? Math.round(parseInt(seconds[1]) / 60) : 0);

    return totalMinutes;
}

export async function getSessions(): Promise<Session[]> {
    const broadcasts = await getPastBroadcasts(process.env.TWITCH_USER_ID as string);

    return broadcasts.map((broadcast: any) => ({
        id: broadcast.id,
        date: new Date(broadcast.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric'}),
        title: broadcast.title,
        durationMinutes: parseDuration(broadcast.duration)
    }));

}
