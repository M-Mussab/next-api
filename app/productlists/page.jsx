import Link from "next/link"

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
            <Link className="m-5 text-red-800 rounded-lg shadow-md font-bold bg-slate-300 p-2 border-2 border-black" href='/'>Home</Link>
            {
                products.map((item)=>(
                    <h3 className='m-5 text-green-950 max-w-md mx-auto rounded-lg shadow-md font-bold bg-slate-300 p-2 border-2 border-black' key={item.id}>Company: {item.title}</h3>
                ))
            }
        </div>
    )
}