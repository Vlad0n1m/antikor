import Link from 'next/link'
export default function HeroBlock() {
    return (
        <div className="flex flex-col justify-center gap-5 max-h-[80vh] h-[80vh] max-w-[750px] mx-auto mb-[100px]">
            <h1 className="text-[8vw] font-bold leading-[7.6vw] max-w-[750px] md:text-[64px] md:leading-[64px]">Конституция
                закрепляет права и свободы человека</h1>
            <div className="relative w-full">
                <input placeholder="Введите запрос для поиска статьи" type="text" className="hidden sm:block rounded-lg bg-[#f0f3f5] p-3 w-full border-2 border-[#f0f3f5] " />
                <input placeholder="Введите запрос" type="text" className=" sm:hidden rounded-lg bg-[#f0f3f5] p-3 w-full border-2 border-[#f0f3f5] " />
                <button className="right-0 absolute rounded-lg bg-black p-3 text-white hover:bg-white hover:text-black border-2 border-black ">Найти</button>
            </div>
            <div className="flex gap-3 ">
                <Link href="/">Статьи</Link>
                <Link href="/">Законы</Link>
                <Link href="/">Новости</Link>
                <Link href="/">Блог</Link>
            </div>
            <h2 className='ring-2 ring-[#f0f3f5] p-3 text-[12px] text-center rounded-lg font-black w-max self-center absolute bottom-4'>Статьи</h2>
        </div>
    )
}