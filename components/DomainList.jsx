'use client';
import { getDomains } from '@/lib/actions/domain.action';
import { Image } from 'iconsax-react';
import Link from 'next/link';
import React from 'react'
import ChatCard from './ChatCard';

function DomainList({domain , rank}) {
 
   
  return (
    <div>

        <h1 className="text-lg text-zinc-400 font-bold ">Your have {domain.length}  Domains </h1>               
         {
           domain ? ( domain && domain.map((item , index)=>(
                <div key={index} className="flex gap-2 my-8">
                    <div className=" bg-slate-100 border border-b-4 border-blue-300 px-4 py-2 text-black text-xl flex items-center justify-between rounded-lg grow">
                        {
                            item.icon ? <img className=' w-12 ' src={item.icon} alt={item.domain} width={20} height={20} /> 
                            : <div className=' flex items-center justify-center rounded-xl border-[2px] border-gray-400 w-12 h-12  '>
                            <Image size="32" color="#2ccce4"/>
                            </div>
                        }
                       
                       <div>
                        <Link className=' text-blue-600 font-bold text-lg' href={`domain/${item.domain}`}>{item.domain}</Link>
                    <div className=' flex gap-1 '>
                       
                        {rank && rank.some(r => r.domain === item.domain) && (
                            <Link href={`/domain/${item.domain}/${rank.find(r => r.domain === item.domain).keyword}`} className=' bg-zinc-300 rounded-lg px-2 hover:text-blue-500 hover:font-semibold transition-all py-[2px] text-sm  '>{rank.find(r => r.domain === item.domain).keyword}</Link>
                        )}
                    </div>
                       </div>
                        <div className=' bg-green-200 w-60 min-h-16 '>

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