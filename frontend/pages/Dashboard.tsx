import Card from "../components/Card";
import StatCard from "../components/StatCard";

export default function Dashboard() {
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

            {/* Lower section */}
            <Card>
                <h3 className="text-lg font-medium mb-4">Recent Sessions</h3>

                <div className="flex flex-col gap-3">
                    <div className="flex justify-between text-sm text-gray-300">
                        <span>April 10 - Just Chatting</span>
                        <span>3h 15m</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-300">
                        <span>April 8 - Dwarf Fortress</span>
                        <span>5h 40m</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-300">
                        <span>April 5 - League of Legends</span>
                        <span>2h 30m</span>
                    </div>
                </div>
            </Card>

            {/* Live Status */}
            <Card>
                <h3 className="text-lg font-medium mb-2">Live Status</h3>
                <div className="flex flex-col gap-2 text-sm text-gray-300">
                    <span>Status: Offline</span>
                    <span>Last Streamed: 3 Days Ago</span>
                    <span>Viewers: --</span>
                </div>
            </Card>

            {/* Charts */}
            <Card>
                <h3 className="mb-4"> Weekly Activity</h3>
                {/* Chart content would go here */}
            </Card>
        </div>
    )
}