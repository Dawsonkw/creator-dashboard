import { useEffect, useState } from "react";
import Card from "../components/Card";
import StatCard from "../components/StatCard";

type Session = {
    id: number;
    date: string;
    title: string;
    duration: string;
}


export default function Dashboard() {
    const [sessions, setSessions] = useState<Session[]> ([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchSessions() {
            try {
                const res = await fetch("http://localhost:3000/api/sessions");
                const data = await res.json();
                setSessions(data);
            }
            catch (err) {
                console.error("Failed to fetch sessions, Bruh, you fucked up", err);
            } finally {
                setLoading(false);
            }
        }

        fetchSessions();
    }, []);

    return (
        <div className="flex flex-col gap-6">
            {/* Header */}
            <div>
                <h2 className="text-2xl font-semibold">Dashboard</h2>
                <p className="text-gray-400 text-sm">Overview of your streaming activity</p>
            </div>
            
            {/* Stat Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <StatCard title="Total Hours" value="42h" />
                <StatCard title="Sessions This Week" value="5" />
                <StatCard title="Avg. Session Length" value="4.2h" />
            </div>

            {/* Lower section Left and Right Grid style */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* LEFT: Recent Sessions */}
                <div className="lg:col-span-2">
                    <Card>
                        <h3 className="text-lg font-medium mb-4">Recent Sessions</h3>
                        {loading ?( 
                            <p>Loading Sessions...</p> 
                        ) : (
                            <div className="flex flex-col gap-3">
                                {sessions.map((session) => (
                                    <div
                                        key={session.id}
                                        className="flex justify-between text-sm text-gray-300 hover:bg-gray-800 rounded px-2 py-1"
                                    >
                                        <span>{session.title}</span>
                                        <span>{session.date}</span>
                                        <span>{session.duration}</span>
                                    </div>
                                ))}
                            </div>
                            )}
                    </Card>
                </div>
                {/* RIGHT: Live Status */}
                <div >
                    <Card>
                        <h3 className="text-lg font-medium mb-2">Live Status</h3>
                        <div className="flex flex-col gap-2 text-sm text-gray-300">
                            <span>Status: Offline</span>
                            <span>Last Streamed: 3 Days Ago</span>
                            <span>Viewers: --</span>
                        </div>
                    </Card>
                </div>
            </div>

            {/* Charts */}
            <Card>
                <h3 className="mb-4"> Weekly Activity</h3>
                {/* Chart content would go here */}
            </Card>
        </div>
    )
}