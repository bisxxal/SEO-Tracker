import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import KeyPages from "@/components/KeyPages"
import KeyWordGraph from "@/components/KeyWordGraph"
import { getKeyWord } from "@/lib/actions/keyword.action"
import { getServerSession } from "next-auth"

async function KeyWordPage(props) {
    const domain = props.params?.domain
    const keyword = decodeURIComponent(props.params?.keyword)
    const session = await getServerSession(authOptions) 

    const getkeyWords = await getKeyWord({owner: session?.user?.email , domain});
 
  const rank = (getkeyWords.results);

  //  const rk = rank.some(r => r.domain === domain) 

  // const rk = rank.find(r => r.domain === domain)?.keyword
      
  //  console.log({rk});
   
  return (
    <div className=' min-h-screen  w-full '>

        <KeyPages domain={domain} keyword={keyword} owner={session?.user?.email} />

        <KeyWordGraph rank={rank} />
    </div>
  )
}

export default KeyWordPage