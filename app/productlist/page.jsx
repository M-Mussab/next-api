
"use client";
import React, { useEffect, useState } from 'react';
import Link from "next/link";

export default function Page() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const jsonData = await response.json();
        console.log(jsonData);
        setProduct(jsonData.products);
      } 
      catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchdata();
  }, []);

  return (
    <div className="container">
      <h1 className="text-4xl m-5 items-center font-extrabold flex justify-center">Product List Client side</h1>
      <Link className="m-5 text-red-800  rounded-lg shadow-md font-bold bg-slate-300 p-2 border-2 border-black" href='/'>Home</Link>
      {product.map((item) => (
        <h1 className='m-5 hover:bg-white text-green-950 max-w-md mx-auto rounded-lg shadow-md font-bold bg-slate-300 p-2 border-2 border-black' key={item.id}>Company: {item.title} <pre> Price: {item.price}</pre></h1>
      ))}
    </div>
  );
}
