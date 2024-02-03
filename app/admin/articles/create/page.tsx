import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
export default function CreateArticlePage() {
    return (
        <>
            <div className="flex gap-4 items-center">
            <Link href="/admin/articles" className="">
                <FontAwesomeIcon icon={faArrowLeft} color="black" />
            </Link>
            <h1 className="text-[32px] font-black">Создать статью</h1>
            </div>
            <form className="flex flex-col gap-[20px] mt-[50px]">
                <div className="flex flex-col gap-[5px]">
                    <p className="font-bold">Название</p>
                    <input type="text" className="border-2 border-black rounded-xl font-bold p-5" placeholder="Название" />
                </div>
                <div className="flex flex-col gap-[5px]">
                    <p className="font-bold">Контент</p>
                    <textarea className="border-2 border-black rounded-xl font-bold p-5" placeholder="Контент" />
                </div>
                <button className="px-6 py-3 font-bold bg-black text-white border-2 border-black rounded-2xl w-max hover:text-black transition-all hover:bg-white">Опубликовать</button>

            </form>
        </>
    )
}