import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar, FaEye } from "react-icons/fa";
import CartButton from "../buttons/CartButton";

const ProductCard = ({ product }) => {
  const { _id, name, price, image, description, rating, category } = product;

  return (
    <div className="group bg-base-100 rounded-md border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full">
      {/* Product Image Area */}
      <figure className="relative h-60 w-full overflow-hidden bg-gray-50">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Rating Badge - Floating on Image */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg shadow-sm border border-gray-100">
          <FaStar className="text-amber-500 text-xs" />
          <span className="text-xs font-bold text-gray-700">{rating}</span>
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 right-3 bg-rose-600 text-white font-bold uppercase text-[9px] px-3 py-1.5 rounded-full backdrop-blur-sm tracking-wider">
          {category}
        </div>
      </figure>

      {/* Card Body */}
      <div className="p-5 flex flex-col grow">
        <h2 className="text-md font-semibold text-gray-800 leading-tight mb-2 group-hover:text-cyan-700 transition-colors line-clamp-1">
          {name}
        </h2>

        <p className="text-gray-500 text-xs line-clamp-2 mb-4 grow leading-relaxed">
          {description}
        </p>

        {/* Price & Action Area */}
        <div className="mt-auto pt-2 border-t border-gray-50 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-md font-black text-cyan-800 tracking-tight">
              ৳ {price}
            </span>
          </div>
        </div>

        <Link
          href={`/products/${_id}`}
          className="btn mt-4 w-full flex gap-2"
          // className="flex items-center gap-2 btn btn-sm px-2 py-1.5 rounded-md text-xs font-semibold hover:bg-cyan-700 transition-all duration-300 shadow-sm active:scale-95"
        >
          DETAILS
        </Link>
        <CartButton product={{ ...product, _id: _id.toString() }}></CartButton>
      </div>
    </div>
  );
};

export default ProductCard;
