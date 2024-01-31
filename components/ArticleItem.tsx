import Link from "next/link"
export default function ArticleItem() {
    return (
        <Link href="/article" className="flex flex-col hover:text-white rounded-lg border-black border-2 p-7 hover:bg-black transition-all">
            <h3 className="font-black text-[18px]">Статья №1</h3>
            <p className="text-[14px]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto</p>
        </Link>
    )
}