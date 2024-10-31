"use client"
import {useRouter} from 'next/navigation'


export default function Home() {
  const router = useRouter();
  const navigate=(name)=>{
    router.push(name)
  }
  return (
     <button className='m-5 text-red-800 rounded-lg shadow-lg hover:bg-white font-bold bg-slate-300 p-2 border-2 border-black' onClick={()=>navigate("/")} >Go to Home</button>

  )
}
