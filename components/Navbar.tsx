'use client'

import { motion } from "framer-motion";
import Link from "next/link"
import { Sling as Hamburger } from 'hamburger-react'
import { useState, useEffect } from "react"
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const isAdmin = usePathname()?.includes("admin");

    console.log(usePathname())
    const [isOpen, setOpen] = useState(false)
    useEffect(() => {
        isOpen
            ? document.body.classList.add("overflow-hidden")
            : document.body.classList.remove("overflow-hidden");
    }, [isOpen]);

    const variants = {
        open: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
        closed: { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
    };
    return (
        <div className={`sticky top-0 z-40 ${isAdmin ? 'hidden' : ''}`} >
            <div className="pt-7 px-5 flex mx-auto max-w-[1400px] items-center justify-center sm:justify-between bg-white">
                <div className="sm:hidden w-[0px] justify-self-start align-self-start absolute left-[9px]">
                    <Hamburger size={20} toggled={isOpen} onToggle={setOpen} />
                </div>
                <Link href="/" className="font-black text-2xl py-3">Antikor</Link>
                <div className="flex items-center gap-1 hidden sm:block">
                    <Link className=" hover:bg-blue-600 hover:text-white p-3 rounded-lg" href="/">Читать</Link>
                    <Link className=" hover:bg-blue-600 hover:text-white p-3 rounded-lg" href="/">Смотреть</Link>
                    <Link className="text-lg font-bold text-blue-600 hover:bg-blue-600 hover:text-white p-3 rounded-lg" href="/">Бот</Link>
                    <Link className="text-lg font-bold text-rose-600 hover:bg-rose-600 hover:text-white p-3 rounded-lg" href="/">PDF</Link>
                </div>
                {/* <SearchButton/> */}
            </div>
            <motion.div
                animate={isOpen ? "open" : "closed"}
                variants={variants}
                className={`w-full h-screen absolute flex bg-white sm:hidden flex-col gap-[20px] items-center justify-start p-[10px] pt-11 z-40`}
            >
                <Link className=" hover:bg-blue-600 hover:text-white p-3 rounded-lg" href="/">Читать</Link>
                <Link className=" hover:bg-blue-600 hover:text-white p-3 rounded-lg" href="/">Смотреть</Link>
                <Link className="text-lg font-bold text-blue-600 hover:bg-blue-600 hover:text-white p-3 rounded-lg" href="/">Бот</Link>
                <Link className="text-lg font-bold text-rose-600 hover:bg-rose-600 hover:text-white p-3 rounded-lg" href="/">PDF</Link>
            </motion.div>
        </div>

    )
}