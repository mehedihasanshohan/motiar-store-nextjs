// import { getSingleProduct } from "@/actions/server/product";
// import CartButton from "@/components/buttons/CartButton";
// import Image from "next/image";
// import React from "react";
// import { FaStar } from "react-icons/fa";

// export async function generateMetadata({ params }) {
//   const { id } = await params;
//   const product = await getSingleProduct(id);

//   return {
//     title: product?.name || "Product Details",
//     description: product?.description?.slice(0, 160) || "Product description",
//   };
// }

// const ProductDetails = async ({ params }) => {
//   const { id } = await params;
//   const product = await getSingleProduct(id);

//   if (!product) {
//     return <div className="text-center py-20 text-2xl">Product not found!</div>;
//   }

//   const { name, price, image, description, category, details, rating } =
//     product;

//   const discount = product.discount || 0;
//   const discountedPrice = price - (price * discount) / 100;

//   return (
//     <div className="max-w-7xl mx-auto py-6 px-6 grid grid-cols-1 md:grid-cols-2 gap-6 bg-base-200">
//       {/* Product Image */}
//       <div className="rounded-xl overflow-hidden border">
//         <Image
//           width={600}
//           height={420}
//           src={image}
//           alt={name}
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Product Info */}
//       <div>
//         <div className="badge badge-secondary mb-2 uppercase text-[10px]">
//           {category}
//         </div>
//         <h1 className="text-3xl font-bold mb-3 mt-2">{name}</h1>

//         {/* Rating */}
//         <div className="flex items-center gap-2 mb-4 mt-2">
//           <div className="flex text-yellow-600">
//             {Array.from({ length: 5 }, (_, i) => (
//               <FaStar
//                 key={i}
//                 className={i < Math.round(rating) ? "" : "opacity-30"}
//               />
//             ))}
//           </div>
//           <span className="text-sm text-gray-600">({rating} Rating)</span>
//         </div>

//         {/* Price */}
//         <div className="mb-6">
//           <span className="text-3xl font-bold text-primary">
//             ৳{discountedPrice.toFixed(2)}
//           </span>
//           {discount > 0 && (
//             <span className="line-through text-gray-400 ml-3">৳{price}</span>
//           )}
//         </div>

//         {/* Short Description */}
//         <p className="text-gray-600 mb-6">{description}</p>

//         <CartButton product={product}></CartButton>
//       </div>

//       {/* Full Details Section */}
//       <div className="col-span-full border-t pt-8">
//         <h3 className="text-xl font-bold mb-4">Product Specifications</h3>
//         <div className="bg-gray-50 p-6 rounded-xl text-gray-700 leading-relaxed">
//           {details?.split(",").map((item, idx) => (
//             <div key={idx} className="flex items-center gap-2 mb-2">
//               <div className="w-2 h-2 bg-primary rounded-full"></div>
//               <span>{item.trim()}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;





import { getSingleProduct } from "@/actions/server/product";
import CartButton from "@/components/buttons/CartButton";
import Image from "next/image";
import React from "react";
import { FaStar, FaTags, FaInfoCircle } from "react-icons/fa";

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
    return (
      <div className="flex flex-col items-center justify-center py-40">
        <h2 className="text-2xl font-bold text-gray-400">পণ্যটি খুঁজে পাওয়া যায়নি!</h2>
      </div>
    );
  }

  const { name, price, image, description, category, details, rating } = product;
  const discount = product.discount || 0;
  const discountedPrice = price - (price * discount) / 100;

  return (
    <div className="bg-base-200 min-h-screen py-12 px-6 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Content Card */}
        <div className="bg-base-100 rounded-md shadow-sm border border-gray-100 overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-10">

          {/* Left: Product Image Area */}
          <div className="relative p-6 md:p-10 bg-gray-50/50 flex items-center justify-center">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-lg border border-white">
              <Image
                fill
                src={image}
                alt={name}
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Category Badge */}
            <div className="absolute top-10 left-10 flex items-center gap-2 bg-cyan-700 text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-md">
              <FaTags size={10} /> {category}
            </div>
          </div>

          {/* Right: Product Info Area */}
          <div className="p-8 md:p-12 flex flex-col">
            <h1 className="text-3xl md:text-4xl font-black text-gray-800 leading-tight mb-4">
              {name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6 bg-amber-50 self-start px-3 py-1.5 rounded-xl border border-amber-100">
              <div className="flex text-amber-500 gap-0.5">
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar
                    key={i}
                    size={14}
                    className={i < Math.round(rating) ? "" : "opacity-20"}
                  />
                ))}
              </div>
              <span className="text-sm font-bold text-amber-700">
                {rating} রেটিং
              </span>
            </div>

            {/* Price Section */}
            <div className="mb-8 p-6 bg-gray-50 rounded-3xl border border-gray-100 self-start min-w-50">
              <div className="flex flex-col">
                <span className="text-xs text-gray-600 font-bold uppercase mb-1">বর্তমান মূল্য</span>
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-black text-cyan-800 tracking-tighter">
                    ৳{discountedPrice.toFixed(0)}
                  </span>
                  {discount > 0 && (
                    <span className="line-through text-rose-300 font-bold text-lg">
                      ৳{price}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                <FaInfoCircle /> সংক্ষিপ্ত বিবরণ
              </h3>
              <p className="text-gray-600 leading-relaxed italic">
                {description}
              </p>
            </div>

            <div className="mt-auto pt-6 border-t border-gray-100">
              <CartButton product={product} />
            </div>
          </div>
        </div>

        {/* Bottom Section: Specifications */}
        <div className="mt-12 bg-white rounded-md p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="flex items-center gap-4 mb-8">
             <div className="h-10 w-1.5 bg-cyan-700 rounded-full"></div>
             <h3 className="text-2xl font-black text-gray-800 uppercase tracking-tight">
               পণ্য স্পেসিফিকেশন
             </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {details?.split(",").map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-transparent hover:border-cyan-100 hover:bg-cyan-50/30 transition-all group"
              >
                <div className="w-2.5 h-2.5 bg-cyan-700 rounded-full group-hover:scale-125 transition-transform"></div>
                <span className="text-gray-700 font-medium">{item.trim()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;