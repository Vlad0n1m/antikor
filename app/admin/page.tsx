import { ReactNode } from "react";


export default function DashboardPage() {
     return (
          <div className="flex flex-col">
               <div className="flex justify-between gap-[20px] sm:gap-0 flex-col sm:flex-row sm:items-center">
                    <h1 className="text-[32px] font-black">Админка</h1>
               </div>
               <div className="flex flex-col sm:flex-row sm:flex-wrap mt-[50px] gap-[12px]">
                    <p>Добро пожаловать! Слева снизу есть стрелочка которая откроет сайдбар.</p>
               </div>
          </div>
     )
}

