import Card from "../components/Card";

type Props = {
    title: string;
    value: string;
}

export default function StatCard({ title, value }: Props) {
    return (
        <Card>
            <p className="text-sm text-gray-400">{title}</p>
            <p className="text-2xl font-semibold mt-1">{value}</p>
        </Card>
    )
}