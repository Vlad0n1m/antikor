import ArticleItem from "./ArticleItem"

export default function ArticlesList() {
    return (
        <div className="flex flex-col gap-5 max-w-[750px] mx-auto mb-[100px]">
            <ArticleItem />
            <ArticleItem />
            <ArticleItem />
            <ArticleItem />
            <ArticleItem />
            <ArticleItem />
        </div>
    )
}