'use client';

import { setDomainName } from "@/lib/actions/domain.action";
import { useRouter } from "next/navigation";

export default function NewDomainForm({ onNew , owner }) {

    const router = useRouter()

  async function handleSubmit(formData) { 


    const domain = formData.get('domain');  

    await setDomainName({ domain , owner });
    
    // // Optionally call the onNew function if needed
    // if (onNew) {
    //   onNew(domain);
    // }
    router.refresh();
  }

  return (
    <form className="flex gap-2 my-8" action={handleSubmit}>
      <input 
        name="domain" 
        className="bg-white border border-b-4 border-blue-200 px-4 py-2 text-black text-xl rounded-lg grow"
        type="text" 
        placeholder="NewDomain.com"
        required
      />
      <button
        type="submit"
        className="bg-indigo-500 text-white px-8 rounded-lg border border-b-4 border-indigo-700 hover:scale-[0.95] transition-transform"
      >
        Add
      </button>
    </form>
  );
}
