import Link from "next/link"
import { productlist } from '@/app/productlist/page';
export default function Home() {
  return (
  <div className="container">
     <h1 className="text-4xl m-5 items-center font-extrabold flex justify-center"> home page</h1>
     <div className=" mx-auto flex justify-center items-center">
     <Link className="m-5 text-red-800  rounded-lg shadow-md font-bold bg-slate-300 p-2 border-2 border-black" href='/productlist'>API Product List on Client </Link>
     <Link className="m-5 text-red-800  rounded-lg shadow-md font-bold bg-slate-300 p-2 border-2 border-black" href='/productlists'>Api Product List on server</Link>
     </div>
  </div>
  )
}


