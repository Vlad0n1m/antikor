import { useState } from "react"

interface DAPProps {
    id: number
}

export default function DeleteArticlePopup(props:DAPProps) {
    const [opened, setOpened] = useState(false);
    return (
        <div className={`bg-white p-5 rounded-xl`}>
            <div className="flex flex-col items-center">
                <h1 className="font-bold">Вы уверены в этом?</h1>
                <p className="text-center">Вы собираетесь удалить статью #{props.id}</p>
            </div>
        </div>
    )
}

// #TODO: Доделать попап при удалении