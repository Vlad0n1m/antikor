import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faEdit, faEye } from "@fortawesome/free-solid-svg-icons"
export default function ArticleItemAdmin() {
    return (
        <div className="flex flex-col sm:flex-row rounded-lg border-black border-2 gap-12 p-7 transition-all items-center">
            <div className="flex flex-col">
                <h3 className="font-black text-[18px]">Статья №1</h3>
                <p className="text-[14px]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto</p>
            </div>
            <div className="flex gap-2 p-2 rounded-lg bg-slate-100">
                <div className="p-2 rounded-lg bg-white w-[40px] h-[40px] text-center">
                    <FontAwesomeIcon icon={faTrash} style={{color: 'red'}} />
                </div>
                <Link href="/admin/articles/create" className="p-2 rounded-lg bg-white w-[40px] h-[40px] text-center">
                    <FontAwesomeIcon icon={faEdit} style={{color: 'blue'}} />
                </Link>
                <Link href='/article' className="p-2 rounded-lg bg-white w-[40px] h-[40px] text-center">
                    <FontAwesomeIcon icon={faEye} style={{color: 'green'}} />
                </Link>
            </div>
        </div>
    )
}