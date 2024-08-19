import Logout from '@/components/Logout';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

function Header({session}) {

   
  return (
    <div className=' h-[100px] w-full flex items-center justify-around '>
        <div className=' text-4xl font-extrabold'>
          <Link href={'/'}>
          SEO Tracker
          </Link>
        </div>

        <div className='  flex bg-[#46484F] items-center gap-4 pr-3 px-2 py-2 rounded-full '>
        <Image width={90} height={90} src={session?.user?.image} alt="" className='h-10 w-10 rounded-full'/>
        <h1 className=' font-bold'>{session?.user?.name}</h1>
        <br/>
        <Logout/>
        </div>
    </div>
  )
}

export default Header