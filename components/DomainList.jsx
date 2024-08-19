'use client';
import { Image } from 'iconsax-react';
import Link from 'next/link';
import React from 'react'
import ChatCard from './ChatCard';
 import { uniqBy } from 'lodash';
function DomainList({domain , rank}) {
 
   
  return (
    <div>

        <h1 className="text-lg text-zinc-400 font-bold ">Your have {domain.length}  Domains </h1>               
         {
           domain ? ( domain && domain.map((item , index)=>(
                <div key={index} className="flex gap-2 my-8">
                    <div className=" bg-slate-100 border border-b-4 border-blue-300 px-4 py-2 text-black text-xl flex items-center justify-between rounded-lg grow">
                        <div className=' flex items-center gap-2'>
                        {
                            item.icon ? <img className=' w-12 ' src={item.icon} alt={item.domain} width={20} height={20} /> 
                            : <div className=' flex items-center justify-center rounded-xl border-[2px] border-gray-400 w-12 h-12  '>
                            <Image size="32" color="#2ccce4"/>
                            </div>
                        }
                     <div>
                     <Link className=' text-blue-600 font-bold text-lg' href={`domain/${item.domain}`}>{item.domain}</Link>
                        <div className=' flex gap-1 '> 

                        {rank && uniqBy(rank.filter(r => r.domain === item.domain), 'keyword')
                        .map((r, index) => (
                            <Link 
                            key={index} 
                            href={`/domain/${item.domain}/${r.keyword}`} 
                            className='bg-zinc-300 rounded-lg px-2 hover:text-blue-500 font-medium capitalize transition-all py-[2px] text-sm mr-1'
                            >
                            {r.keyword}
                            </Link>
                        ))
                        } 
                    </div>
                     </div>
                       </div>
                        <div className=' w-4/6 min-h-16 '>

                          {rank && rank.some(r => r.domain === item.domain) && (
                              <ChatCard results={rank} />
                            )}
                        </div>
                    </div>
                </div>
            ))  ) : <h1 className="text-lg text-zinc-400 font-bold ">No Domains Found</h1>
         }
    </div>
  )
}

export default DomainList