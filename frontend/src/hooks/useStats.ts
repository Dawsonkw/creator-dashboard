   import type { Session } from "../api/sessions";

   
export function useStats(sessions: Session[]) {   const totalSessions = sessions.length;

    const totalMinutes = sessions.reduce(
        (acc, s) => acc + s.durationMinutes,
        0
    );
    const totalHours = (totalMinutes / 60).toFixed(1);

    const avgMinutes = sessions.length > 0 ? totalMinutes / sessions.length : 0;

    const avgHours = (avgMinutes / 60).toFixed(1);

    function formatDuration(minutes: number) {
        return `${Math.floor(minutes / 60)}h ${minutes % 60}m`;
    }

    return {
        totalSessions,
        totalMinutes,
        totalHours,
        avgMinutes,
        avgHours,
        formatDuration
    };
}