export type Session = {
    id: string;
    date: string;
    title: string;
    durationMinutes: number;
}

const sessions: Session[] = [
    { id: "1", date: "April 10", title: "Just Chatting", durationMinutes: 195 },
    { id: "2", date: "April 8", title: "Dwarf Fortress", durationMinutes: 340 },
    { id: "3", date: "April 6", title: "League of Legends", durationMinutes: 150 },
    { id: "4", date: "April 4", title: "Minecraft", durationMinutes: 250 },
    { id: "5", date: "April 2", title: "Baldur's Gate 3", durationMinutes: 230 }
];

export function getSessions() {
    return sessions; 
}