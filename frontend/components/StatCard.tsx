type Props = {
    title: string;
    value: string;
}

export default function StatCard({ title, value }: Props) {
    return (
        <div className=" bg-gray-900 p-4 rounded-xl border border-gray-800">
            <p className="text-sm text-gray-400">{title}</p>
            <p className="text-2xl font-semibold mt-1">{value}</p>
        </div>
    )
}