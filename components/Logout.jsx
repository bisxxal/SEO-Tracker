"use client"
import { signOut } from 'next-auth/react'
import React from 'react'

function Logout() {
  return (
    <div>
    <button onClick={()=>signOut()} className='bg-red-500 px-6 py-2 rounded-xl border border-red-700 border-b-4 gap-2 items-center hover:scale-[0.95] transition-transform'>
        Logout
    </button>
    </div>
  )
}

export default Logout