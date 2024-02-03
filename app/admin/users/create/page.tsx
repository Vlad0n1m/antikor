import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
export default function CreateUserPage() {
    return (
        <>
            <div className="flex gap-4 items-center">
                <Link href="/admin/users" className="">
                    <FontAwesomeIcon icon={faArrowLeft} color="black" />
                </Link>
                <h1 className="text-[32px] font-black">Создать пользователя</h1>
            </div>
            <form className="flex flex-col gap-[20px] mt-[50px]">
                <div className="flex flex-col gap-[5px]">
                    <p className="font-bold">Имя пользователя</p>
                    <input type="text" className="border-2 border-black rounded-xl font-bold p-5" placeholder="ФИО" />
                </div>
                <div className="flex flex-col gap-[5px]">
                    <p className="font-bold">Почта Email</p>
                    <input type="text" className="border-2 border-black rounded-xl font-bold p-5" placeholder="email" />
                </div>
                <div className="flex flex-col gap-[5px]">
                    <p className="font-bold">Пароль</p>
                    <input type="password" className="border-2 border-black rounded-xl font-bold p-5" placeholder="Пароль" />
                </div>
                <div className="flex flex-col gap-[5px]">
                    <p className="font-bold">Повторите пароль</p>
                    <input type="password" className="border-2 border-black rounded-xl font-bold p-5" placeholder="Пароль" />
                </div>
                <div className="flex flex-col gap-[5px]">
                    <p className="font-bold">О пользователе</p>
                    <textarea className="border-2 border-black rounded-xl font-bold p-5" placeholder="Что бы потом не забыть..." />
                </div>

                <div className="flex flex-col gap-5px">
                    <p className="font-bold">Права доступа</p>
                    <div className="flex flex-row gap-[5px]">
                        <input id="can_edit" type="checkbox" name="can_edit" />
                        <p className="font-bold">Может редактировать</p>
                    </div>
                    <div className="flex flex-row gap-[5px]">
                        <input id="can_create" type="checkbox" name="can_create" />
                        <p className="font-bold">Может Создавать</p>
                    </div>
                    <div className="flex flex-row gap-[5px]">
                        <input id="can_add_user" type="checkbox" name="can_add_user" />
                        <p className="font-bold">Может Добавлять Пользователей</p>
                    </div>
                </div>
                <button className="px-6 py-3 font-bold bg-black text-white border-2 border-black rounded-2xl w-max hover:text-black transition-all hover:bg-white">Опубликовать</button>
            </form>
        </>
    )
}