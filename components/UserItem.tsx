import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"

interface UIProps {
    photo_url: string,
    username: string,
    date_created: string,
    role: string,
}

export default function UserItem(props: UIProps) {
    return (
        <Link href='/admin/users/create' className="flex p-3 border-2 flex-col border-black rounded-lg gap-3 items-center w-full sm:w-max hover:bg-black hover:text-white transition-all">
            <div className="bg-white rounded-lg">
                <FontAwesomeIcon icon={faUser} style={{ fontSize: 100, color: "black" }} />
            </div>
            <div className="flex flex-col text-center">
                <h3 className="mb-[10px] font-black text-[18px]">{props.username}</h3>
                <p>{props.role}</p>
                <p>Created at {props.date_created}</p>
            </div>
        </Link>
    )
}