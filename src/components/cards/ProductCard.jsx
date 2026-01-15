import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaStar, FaCartPlus } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  const { _id, name, price, image, description, rating, category } = product;

  return (
    <div className="card bg-base-300 shadow-xl border border-gray-100
    hover:shadow-2xl transition-all duration-300 group">
      {/* Product Image Area */}
      <figure className="relative h-64 w-full overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Category Badge */}
        <div className="absolute top-2 right-2 badge badge-secondary font-semibold uppercase text-[10px]">
          {category}
        </div>
      </figure>

      {/* Card Body */}
      <div className="card-body p-5">
        <div className="flex justify-between items-start">
          <h2 className="card-title text-lg font-bold text-gray-800 leading-tight">
            {name}
          </h2>
          <div className="flex items-center text-amber-500 font-bold bg-amber-50 px-2 py-1 rounded">
            <FaStar className="mr-1 text-sm" />
            <span className="text-sm">{rating}</span>
          </div>
        </div>

        <p className="text-gray-500 text-sm line-clamp-2 my-2">
          {description}
        </p>
         <Link
          href={`/products/${_id}`}
          className="btn btn-primary btn-outline mt-4 w-full"
        >
          View Details
        </Link>

        <div className="flex items-center justify-between mt-4">
          <div>
            <span className="text-2xl font-extrabold text-primary">৳{price}</span>
            <span className="block text-[10px] text-gray-400 uppercase tracking-widest font-bold">Price</span>
          </div>

          <div className="card-actions justify-end">
            <Link href={`/product/${_id}`} className="btn btn-primary btn-sm md:btn-md flex items-center gap-2">
              <FaCartPlus className="text-lg" />
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;