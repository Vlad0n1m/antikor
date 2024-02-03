import ArticleItem from "@/components/ArticleItem"
import Link from "next/link"

export default function ArticlesPage() {
    return (
        <div className="flex flex-col">
            <div className="flex justify-between gap-[20px]  sm:gap-0  flex-col sm:flex-row sm:items-center">
                <h1 className="text-[32px] font-black">Статьи</h1>
                <Link href='articles/create' className="px-6 py-3 text-center font-bold bg-black text-white border-2 border-black rounded-2xl hover:text-black transition-all hover:bg-white">+ Новая статья</Link>
            </div>
            <div className="flex flex-col mt-[50px] gap-[12px]">
                <ArticleItem/> 
                <ArticleItem/> 
                <ArticleItem/> 
                <ArticleItem/> 
                <ArticleItem/> 
                <ArticleItem/> 
                <ArticleItem/> 
                <ArticleItem/> 
                <ArticleItem/> 
                <ArticleItem/> 
                <ArticleItem/> 
                <ArticleItem/> 
                <ArticleItem/> 
                <ArticleItem/> 
            </div>

        </div>
    )
}