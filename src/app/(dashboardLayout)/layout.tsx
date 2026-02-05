import { ReactNode } from "react";
import { Sidebar1 } from '@/components/layout/sidebar';


export default function DashboardLayout({ admin, user }: { admin: ReactNode, user: ReactNode }) {
    return (
        <div>
            <Sidebar1 admin={true} user={false}>
            </Sidebar1>
        </div>
    )
}
