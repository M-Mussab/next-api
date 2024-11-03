import Link from "next/link"
import Home from "./product";
import Pprice from "./price";
async function productList() {
    let data = await fetch ("https://dummyjson.com/products")
    data = await data.json();
    return data.products
}
export default async function page () {
    let products =await productList();
    console.log(products);
    return(
        <div>
            <h1 className="text-4xl m-5 items-center font-extrabold flex justify-center">Product List server side</h1>
            <div className="inline-flex items-cente">
                <Home />
            <Link className="m-5 text-red-800 rounded-lg shadow-md font-bold bg-slate-300 p-2 border-2 border-black" href='/'>Home</Link>
            </div>
            {
                products.map((item)=>(
                    <>
                    <div className='m-5 hover:bg-white text-green-950 max-w-md mx-auto rounded-lg shadow-md font-bold bg-slate-300 p-2 border-2 border-black' >
                    <h3 key={item.id}>Company: {item.title}</h3>
                    <Pprice description={item.description}/>
                    <Link className="underline" href={`/productlists/${item.id}`}>About</Link>
                    </div>
                    </>
                ))
            }
        </div>
    )
}