'use client'; 
import {signIn} from "next-auth/react";

export default function LoginScreen() {
  return (
    <div className="bg-[#dbeafe54 mt-8  max-w-md border border-[#93c4fd58] border-b-4 mx-auto rounded-xl py-6 text-center">
       <button
        onClick={() => signIn('google')}
        className="bg-indigo-500 text-white capitalize px-6 py-2 rounded-xl border border-indigo-700 border-b-4 inline-flex gap-2 items-center my-6">
        <img className="w-4 invert" src="https://www.svgrepo.com/show/50809/google.svg" alt=""/>
        Login with google
      </button>
    </div>
  );
}