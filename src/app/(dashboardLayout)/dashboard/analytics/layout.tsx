import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AnalyticsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <div className="space-x-4">
                <Button asChild><Link href="/dashboard/analytics/monthly"> monthly</Link></Button>
                <Button asChild><Link href="/dashboard/analytics/weekly"> weekly</Link></Button>
            </div>
            {children}
        </div>
    )
}
