import Link from "next/link";
import Home from "./product";
import Pprice from "./price";
import Image from "next/image";

async function productList() {
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  return data.products;
}

export default async function Page() {
  let products = await productList();

  return (
    <div>
      <h1 className="text-4xl m-5 font-extrabold flex justify-center">
        Product List (Server Side)
      </h1>
      <div className="inline-flex items-center">
        <Home />
        <Link
          className="m-5 text-red-800 rounded-lg shadow-md font-bold bg-slate-300 p-2 border-2 border-black"
          href="/"
        >
          Home
        </Link>
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {products.map((item) => (
          <div
            key={item.id}
            className="m-5 hover:bg-white sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-xs text-green-950 rounded-lg shadow-md font-bold bg-slate-300 p-4 border-2 border-black"
          >
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <h3 className="text-sm">RS {item.price}</h3>
              <Link className="underline text-blue-500" href={`/productlists/${item.id}`}>
                About
              </Link>
              <div className="mt-2">
                {item.images && item.images.length > 0 ? (
                  <Image
                    src={item.images[0]}
                    alt={item.title}
                    width={200}
                    height={200}
                    className="rounded-md"
                  />
                ) : (
                  <p>No image available</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
