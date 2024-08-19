import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import LoginScreen from '@/app/LoginScreen'
import KeyWordForm from '@/components/KeyWordForm'
import KeyWordList from '@/components/KeyWordList'
import { deleteDomains } from '@/lib/actions/domain.action'
import { getKeyWord } from '@/lib/actions/keyword.action'
import { getServerSession } from 'next-auth'
import React from 'react'

 async function page({params}) {
  const domain = params.domain
  const session = await getServerSession(authOptions)
  const getkeyWords = await getKeyWord({owner: session?.user?.email , domain})
  
  
  if(!session){
    <LoginScreen />
  }
  if(session){

    return (
      <div className=' min-h-screen '>
 

      <KeyWordForm domain={domain} owner={session?.user?.email}  />

      <KeyWordList keyWords={getkeyWords.Keywd} rank={getkeyWords.results}  domain={domain}/> 
      
     </div>
  )
}
}

export default page