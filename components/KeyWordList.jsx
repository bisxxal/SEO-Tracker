import Link from 'next/link'
import React from 'react'
import ChatCard from './ChatCard'

function KeyWordList({keyWords ,rank , domain}) {
  // console.log(rank);
  
  return (
    <div className=' w-1/2 mx-auto'> 
               
     {
       keyWords ? ( keyWords && keyWords.map((item , index)=>(
            <div key={index} className="flex gap-2 my-8">
                <div className=" bg-slate-100 border border-b-4 border-blue-300 px-4 py-2 text-black text-xl flex items-center justify-between rounded-lg grow">
                   
                    <Link href={`${domain}/${item.keyword}`} className=' capitalize text-blue-600 font-bold text-lg' >{item.keyword}</Link>
                    <div className=' flex items-center justify-center w-[400px] min-h-16 '> 
                          <ChatCard results={rank}/> 
                    </div>
                </div>
            </div>
        ))  ) : <h1 className="text-lgw text-zinc-400 font-bold ">No KeyWord Found</h1>
     }
</div>
  )
}

export default KeyWordList