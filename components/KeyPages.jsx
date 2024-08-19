'use client'
import { deleteKeyword } from '@/lib/actions/keyword.action';
import { ArrowRight2, Trash } from 'iconsax-react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);


function KeyPages({keyword ,owner , domain}) {
  const router = useRouter()

  const onDeleteDomain = async () => {
    
    try {
      await deleteKeyword({owner , domain , keyword})      
      router.push('/domain/'+domain)
      router.refresh()
    } catch (error) { 
      console.log(error)
    } 
  }

  const showAlert = () => {
    MySwal.fire({
      title: 'Delete KeyWord?',
      text: `Do you want to delete ${keyword}?`,
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
   <div className=' w-1/2 mx-auto '>
    <h2 className=' text-gray-400 flex items-center '>Keyword <ArrowRight2 size="20" color="#d9e3f0"/></h2>
    <div className=' flex items-center gap-3'>
    <Link  href={`/domain/${domain}`} className=' text-3xl font-bold  '>{keyword} </Link>
  <button  onClick={showAlert}  className="bg-red-500 flex items-center gap-1   text-white px-3 py-1 rounded-lg border border-b-4 border-red-700 hover:scale-[0.95] transition-transform">
     <Trash size="23" color="white " /> Delete</button>
    </div>
   </div>

  )
}

export default KeyPages