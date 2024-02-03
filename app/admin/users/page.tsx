import Link from "next/link"
import UserItem from "@/components/UserItem"
export default function UsersPage() {
    return (
        <div className="flex flex-col">
            <div className="flex justify-between gap-[20px] sm:gap-0 flex-col sm:flex-row sm:items-center">
                <h1 className="text-[32px] font-black">Пользователи</h1>
                <Link href='users/create' className="px-6 py-3 text-center font-bold bg-black text-white border-2 border-black rounded-2xl hover:text-black transition-all hover:bg-white">+ Новый пользователь</Link>
            </div>
            <div className="flex flex-col sm:flex-row sm:flex-wrap mt-[50px] gap-[12px]">
              <UserItem username="l0xa1" role="admin" date_created="23.02.12" photo_url="/"/>
              <UserItem username="l0xa1" role="admin" date_created="23.02.12" photo_url="/"/>
              <UserItem username="l0xa1" role="admin" date_created="23.02.12" photo_url="/"/>
              <UserItem username="l0xa1" role="admin" date_created="23.02.12" photo_url="/"/>
              <UserItem username="l0xa1" role="admin" date_created="23.02.12" photo_url="/"/>
              <UserItem username="l0xa1" role="admin" date_created="23.02.12" photo_url="/"/>
              <UserItem username="l0xa1" role="admin" date_created="23.02.12" photo_url="/"/>
              <UserItem username="l0xa1" role="admin" date_created="23.02.12" photo_url="/"/>
              <UserItem username="l0xa1" role="admin" date_created="23.02.12" photo_url="/"/>
              
            </div>
        </div>
    )
}