import { useEffect, useState } from "react";
import { getSessions, type Session } from "../api/sessions";

export function useSessions() {
    const [sessions, setSessions] = useState<Session[]> ([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getSessions()
            .then(setSessions)
            .catch(err => {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("Somthing terribly terribly wrong has happened");
                }
            })
            .finally(() => setLoading(false));
    }, []);

    return { sessions, loading, error };
}
