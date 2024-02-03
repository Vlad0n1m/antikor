"use client"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faNewspaper, faGear, faDashboard } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
export default function Sidebar() {
    const [opened, setOpen] = useState(true)
    const handleClick = () => {
        setOpen(opened == true ? false : true)
    }
    return (
        <>
            <div className={`flex p-6 flex-col justify-between transition-all max-w-[300px] w-full bg-white shadow-xl h-full position fixed left-0 ${opened ? 'left-[-300px]' : 'left-[0px]'}`}>
                <div className="flex flex-col items-start gap-3">
                    <Link href='/admin' className="font-black text-[30px] w-full ">ADMIN</Link>
                    <div className="bg-black h-[1px] w-full my-[15px]"></div>
                    <Link className="flex gap-2 text-[18px] font-[500]  items-center" href='/admin/dashboard'><FontAwesomeIcon
                        icon={faDashboard}
                        style={{ fontSize: 18, color: "black" }}
                    />Дашборд</Link>
                    <Link className="flex gap-2 text-[18px] font-[500] items-center" href='/admin/articles'><FontAwesomeIcon
                        icon={faNewspaper}
                        style={{ fontSize: 18, color: "black" }}
                    />Статьи</Link>
                    <Link className="flex gap-2 text-[18px] font-[500]  items-center" href='/admin/users'><FontAwesomeIcon
                        icon={faUser}
                        style={{ fontSize: 18, color: "black" }}
                    />Пользователи</Link>
                    <Link className="flex gap-2  text-[18px] font-[500]  items-center" href='/admin/settings'><FontAwesomeIcon
                        icon={faGear}
                        style={{ fontSize: 18, color: "black" }}
                    />Настройки</Link>
                    <div className="bg-black h-[1px] w-full my-[15px]"></div>

                </div>
                <Link href='/' className="rounded-lg text-center text-[18px] font-bold transition-all py-3 font-bold text-[14px] hover:text-white hover:border-3 hover:bg-black border-black border-2">Выйти</Link>
            </div>
            <button onClick={handleClick} className={`w-[50px] rounded-full bg-black shadow-lg  fixed bottom-[10px] p-3 transition-all ${opened ? 'rotate-0 left-[10px]' : 'rotate-180 left-[310px]'}`}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </button>
        </>
    )
}