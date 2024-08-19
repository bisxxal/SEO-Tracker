import DomainForm from "@/components/DomainForm";
import Image from "next/image";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { getDomains } from "@/lib/actions/domain.action";
import DomainList from "@/components/DomainList";
import { getKeyWord } from "@/lib/actions/keyword.action";

export default async function Home() {
  const session = await getServerSession(authOptions)
  const domain = await getDomains({owner :session?.user?.email});
  const getkeyWords = await getKeyWord({owner: session?.user?.email , domain: domain.map(k=> k.domain)}); 
  return (
    <div className=" h-screen mx-auto w-1/2 mt-5"> 
      <h1 className="text-2xl font-bold ">Add a new domain</h1>    
       <DomainForm owner={session?.user?.email} />
 
        <DomainList  rank={getkeyWords.results} domain = {domain} />  
       </div>
  );
}
