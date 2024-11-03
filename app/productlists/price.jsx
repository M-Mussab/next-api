"use client"
import {useRouter} from 'next/navigation'


export default function pprice({description}) {
  return (
     <button className='m-5 text-red-800 rounded-lg shadow-lg hover:bg-white font-bold bg-slate-300 p-2 border-2 border-black' onClick={()=>alert(description)} >Check Description </button>

  )
}
