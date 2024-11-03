// app/productlists/[dynamiclink]/page.js
"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Loading from "../loading";

export default function ProductDetail() {
  const { dynamiclink } = useParams(); // Gets the dynamic parameter from the route
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
      const res = await fetch(`https://dummyjson.com/products/${dynamiclink}`);
      const data = await res.json();
      setProduct(data);
      setLoading(false);
    }
    fetchProduct();
  }, [dynamiclink]);

  if (loading) return <p><Loading/></p>;

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
      <p className="mt-1">Warranty: {product.warrantyInformation}</p>
      </div>
      <div>
      {product.images && product.images.length > 0 ? ( // Check if images exist
        <Image
          src={product.images[0]} // Access the first image in the array
          alt={product.title} // Use a meaningful alt attribute
          width={300}
          height={300}
        />
      ) : (
        <p>No image available</p> // Fallback if no image is found
      )}
      </div>
    </div>
  );
}
