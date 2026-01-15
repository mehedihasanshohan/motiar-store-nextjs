import { getSingleProduct } from "@/actions/server/product";
import CartButton from "@/components/buttons/CartButton";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = await getSingleProduct(id);

  return {
    title: product?.name || "Product Details",
    description: product?.description?.slice(0, 160) || "Product description",
  };
}

const ProductDetails = async ({ params }) => {
  const { id } = await params;
  const product = await getSingleProduct(id);

  if (!product) {
    return <div className="text-center py-20 text-2xl">Product not found!</div>;
  }

  const { name, price, image, description, category, details, rating } =
    product;

  const discount = product.discount || 0;
  const discountedPrice = price - (price * discount) / 100;

  return (
    <div className="max-w-7xl mx-auto py-6 px-6 grid grid-cols-1 md:grid-cols-2 gap-6 bg-base-200">
      {/* Product Image */}
      <div className="rounded-xl overflow-hidden border">
        <Image
          width={600}
          height={420}
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Info */}
      <div>
        <div className="badge badge-secondary mb-2 uppercase text-[10px]">
          {category}
        </div>
        <h1 className="text-3xl font-bold mb-3 mt-2">{name}</h1>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4 mt-2">
          <div className="flex text-yellow-600">
            {Array.from({ length: 5 }, (_, i) => (
              <FaStar
                key={i}
                className={i < Math.round(rating) ? "" : "opacity-30"}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">({rating} Rating)</span>
        </div>

        {/* Price */}
        <div className="mb-6">
          <span className="text-3xl font-bold text-primary">
            ৳{discountedPrice.toFixed(2)}
          </span>
          {discount > 0 && (
            <span className="line-through text-gray-400 ml-3">৳{price}</span>
          )}
        </div>

        {/* Short Description */}
        <p className="text-gray-600 mb-6">{description}</p>

        <CartButton product={product}></CartButton>
      </div>

      {/* Full Details Section */}
      <div className="col-span-full border-t pt-8">
        <h3 className="text-xl font-bold mb-4">Product Specifications</h3>
        <div className="bg-gray-50 p-6 rounded-xl text-gray-700 leading-relaxed">
          {details?.split(",").map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>{item.trim()}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
