import Link from "next/link";
import Home from "./product";
import Image from "next/image";

async function productList() {
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  return data.products;
}

export default async function Page() {
  let products = await productList();

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-10">
        Product List (Server Side)
      </h1>
      <div className="flex items-center justify-center mb-8 space-x-5">
        <Home />
      </div>
      <div className="flex flex-wrap gap-8 justify-center px-5">
        {products.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            {/* Image Section */}
            <Link href={`/productlists/${item.id}`} passHref>
              <div className="w-full sm:w-72 md:w-80 lg:w-64 bg-white text-gray-900 rounded-lg shadow-lg p-5 border border-gray-200 hover:shadow-2xl transform transition-transform duration-300 ease-in-out">
                {item.images && item.images.length > 0 ? (
                  <Image
                    src={item.images[0]}
                    alt={item.title}
                    width={200}
                    height={200}
                    className="rounded-md h-48 object-contain cursor-pointer hover:scale-110 transition-transform duration-200 ease-out" // Make image clickable
                  />
                ) : (
                  <p className="text-gray-400">No image available</p>
                )}
              </div>
            </Link>

            {/* Product Title */}
            <h3 className="text-xl font-bold mb-1 max-w-xs text-center">{item.title}</h3> {/* Set max width for title */}
            
            {/* Price Section */}
            <div className="mb-2 text-gray-800">
              <span className="text-3xl font-bold text-green-600">${item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const products = await productList();

  return products.map((product) => ({
    params: { id: product.id.toString() },
  }));
}



// hover:scale-110 transition-transform duration-200 ease-out