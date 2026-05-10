import type { ReactNode } from "react";

export default function Card({ children }: { children: ReactNode }) {
    return (
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
            {children}
        </div>
    )
}