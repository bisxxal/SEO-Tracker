import React from 'react'
import ChatCard from './ChatCard'

function KeyWordGraph({rank}) {
  return (
    <div className=' w-[37%] mx-auto mt-10'>
        <div className="bg-green-100 h-52 rounded-lg ">
          <ChatCard results={rank} />
        </div>
    </div>
  )
}

export default KeyWordGraph