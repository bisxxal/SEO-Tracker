'use client'

import { deleteDomains } from "@/lib/actions/domain.action";
import { setKeyWord } from "@/lib/actions/keyword.action"
import { ArrowRight2, Trash } from "iconsax-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

  function KeyWordForm({domain ,owner}) {
    const router = useRouter()
    // const deleteDomain = await deleteDomains({owner: session?.user?.email})

  async function handleSubmit(formData) { 
    const keyword = formData.get('keyword'); 

    const res = await setKeyWord ({keyword , owner , domain})

    router.refresh()
  }
 
  const onDeleteDomain = async () => {
    
    try {
      await deleteDomains({owner})
      router.push('/')
      router.refresh()
    } catch (error) { 
    } 
  }

  const showAlert = () => {
    MySwal.fire({
      title: 'Delete?',
      text: `Do you want to delete ${domain}?`,
      cancelButtonText: 'Cancel',
      confirmButtonText: 'Delete',
      confirmButtonColor: '#f00',
      showCloseButton: true,
      showCancelButton: true,
      reverseButtons: true,
      focusCancel: true,
      focusConfirm: false,

                    
    }).then(result => {
      if (result.isConfirmed) {
        onDeleteDomain();
      }
    })
  }

  return (
    <div className=" w-1/2 mx-auto ">

    <h2 className=' text-gray-400 flex items-center '>Domains <ArrowRight2 size="20" color="#d9e3f0"/></h2>
      <div className=' flex items-center gap-3'>
      <Link href={'/'} className=' text-3xl font-bold  '>{domain} </Link>
    <button onClick={showAlert} className="bg-red-500 flex items-center gap-1   text-white px-3 py-1 rounded-lg border border-b-4 border-red-700 hover:scale-[0.95] transition-transform">
       <Trash size="23" color="white " /> Delete</button>
      </div>

    <form className="flex gap-2   my-8" action={handleSubmit}>
      <input 
        name="keyword" 
        className="bg-white border border-b-4 border-blue-200 px-4 py-2 text-black text-xl rounded-lg grow"
        type="text" 
        placeholder="New Keyword"
        required
      />
      <button
        type="submit"
        className="bg-indigo-500 text-white px-8 rounded-lg border border-b-4 border-indigo-700 hover:scale-[0.95] transition-transform"
        >
        Add
      </button>
    </form>
        </div>
  )
}

export default KeyWordForm