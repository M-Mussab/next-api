// app/productlists/[dynamiclink]/page.js

import Image from "next/image";

// Fetch product data based on the dynamiclink parameter (product ID)
async function fetchProductData(productId) {
  const res = await fetch(`https://dummyjson.com/products/${productId}`);
  const product = await res.json();
  return product;
}

export default async function ProductDetail({ params }) {
  const { dynamiclink } = params;

  // Fetch product data on the server
  let product;
  try {
    product = await fetchProductData(dynamiclink);
  } catch (error) {
    console.error("Failed to fetch product data:", error);
    return <p>Product not found.</p>;
  }
 
  return (
    <div className="m-5 p-5 border rounded shadow-lg bg-white flex">
      <div>
        <h1 className="text-4xl font-bold">{product.title}</h1>
        <p className="text-lg mt-3 max-w-lg">Description: {product.description}</p>
        <p className="mt-3 text-green-500 text-2xl">Price: Rs {product.price}</p>
        <p className="mt-1">Category: {product.category}</p>
        <p className="mt-1">Rating: {product.rating}</p>
        <p className="mt-1">Stock: {product.stock}</p>
        <p className="mt-1">Discount: {product.discountPercentage}%</p>
        {product.warrantyInformation && (
          <p className="mt-1">Warranty: {product.warrantyInformation}</p>
        )}
      </div>
      <div>
        {product.images && product.images.length > 0 ? (
          <Image
            src={product.images[0]}
            alt={product.title}
            width={300}
            height={300}
          />
        ) : (
          <p>No image available</p>
        )}
      </div>
    </div>
  );
}

// Generate static paths for each product using the product ID
export async function generateStaticParams() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  const products = data.products;

  // Return an array of parameters for each product page
  return products.map((product) => ({
    dynamiclink: product.id.toString(),
  }));
}

