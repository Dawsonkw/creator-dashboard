import { getPastBroadcasts } from './twitchService';
import prisma from './prismaClient';

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


    return totalMinutes;}

    async function syncSessions(): Promise<void> {
        const broadcasts = await getPastBroadcasts(process.env.TWITCH_USER_ID as string);

        for (const broadcast of broadcasts) {
            await prisma.session.upsert({
                where: { id: broadcast.id },
                update: {
                    title: broadcast.title,
                    durationMinutes: parseDuration(broadcast.duration),
                },
                create: {
                    id: broadcast.id,
                    date: new Date(broadcast.created_at).toLocaleDateString( 'en-US', { month: 'long', day: 'numeric'}),
                    title: broadcast.title,
                    durationMinutes: parseDuration(broadcast.duration),
                },
            });
        }
    }

    export async function getSessions(): Promise<Session[]> {
        await syncSessions();
        return prisma.session.findMany();
    }