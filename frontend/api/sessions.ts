import { apiFetch } from "./client";

export type Session = {
    id: number;
    date: string;
    title: string;
    duration: string;
}

export function getSessions(): Promise<Session[]> {
    return apiFetch<Session[]>("/sessions");
}

