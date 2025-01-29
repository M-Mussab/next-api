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
    <>
  
    <div className="m-10 p-8 border rounded-lg shadow-xl bg-white flex flex-col md:flex-row items-center gap-10 max-w-4xl mx-auto">
      {/* Product Image */}
      <div className="flex justify-center w-full md:w-1/2">
        {product.images && product.images.length > 0 ? (
          <Image
            src={product.images[0]}
            alt={product.title}
            width={300}
            height={300}
            className="rounded-lg shadow-lg object-cover"
          />
        ) : (
          <p>No image available</p>
        )}
      </div>

      {/* Product Details */}
      <div className="w-full md:w-1/2">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.title}</h1>
        <p className="text-lg mt-3 text-gray-700 max-w-lg">
          <span className="font-semibold">Description:</span> {product.description}
        </p>
        <p className="mt-3 text-green-600 text-2xl font-semibold">
          Price: Rs {product.price}
        </p>
        <p className="mt-1 text-gray-600">
          <span className="font-semibold">Category:</span> {product.category}
        </p>
        <p className="mt-1 text-yellow-500">
          <span className="font-semibold">Rating:</span> {product.rating}
        </p>
        <p className="mt-1 text-gray-600">
          <span className="font-semibold">Stock:</span> {product.stock}
        </p>
        <p className="mt-1 text-gray-600">
          <span className="font-semibold">Discount:</span> {product.discountPercentage}%
        </p>
        {product.warrantyInformation && (
          <p className="mt-1 text-gray-600">
            <span className="font-semibold">Warranty:</span> {product.warrantyInformation}
          </p>
        )}

        {/* Static "Add to Cart" Button */}
        <div className="mt-5 px-2 py-2 text-center rounded-lg bg-yellow-600 max-w-xs mx-auto text-white font-semibold shadow-lg transition-transform duration-300 hover:scale-105">
          Add to Cart
        </div>
      </div>
    </div>
    </>
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
