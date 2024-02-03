import Sidebar from "@/components/Sidebar"
import { ReactNode } from 'react';

interface AdminLayoutProps {
    children?: ReactNode;
}

export default function AdminLayout(props: AdminLayoutProps) {
    return (
        <div className="">
            <Sidebar />
            <div className="flex flex-col shadow-xl rounded-lg w-full h-full p-6">
                {props.children}
            </div>
        </div>
    )
}