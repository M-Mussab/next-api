import Link from "next/link"
import { productlist } from '@/app/productlist/page';
export default function Home() {
  return (
  <div className="container">
     <h1 className="text-4xl items-center font-extrabold flex justify-center"> home page</h1>
     <Link className="m-5 text-red-800  rounded-lg shadow-md font-bold bg-slate-300 p-2 border-2 border-black" href='/productlist'> Product List</Link>
  </div>
  )
}


