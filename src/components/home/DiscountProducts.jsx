"use client";
import Image from "next/image";
import { BadgePercent } from "lucide-react";

const discountProducts = [
  {
    name: "চিনিগুড়া চাল",
    oldPrice: "১৬০",
    newPrice: "১৫০",
    img: "/assets/chal.jfif",
    off: "১০৳",
  },
  {
    name: "মসুর ডাল (১ কেজি)",
    oldPrice: "১৪০",
    newPrice: "১৩০",
    img: "/assets/dal.jfif",
    off: "১০৳",
  },
  {
    name: "সয়াবিন তেল (৫ লিটার)",
    oldPrice: "৮৯০",
    newPrice: "৮৫০",
    img: "/assets/soyabin.jfif",
    off: "৪০৳",
  },
  {
    name: "ডিটারজেন্ট পাউডার",
    oldPrice: "৬০",
    newPrice: "৫২",
    img: "/assets/powder.jfif",
    off: "৮৳",
  },
  {
    name: "এক ডজন ডিম",
    oldPrice: "১৫৫",
    newPrice: "১৪৫",
    img: "/assets/egg2.jfif",
    off: "১০৳",
  },
  {
    name: "ম্যাগি নুডলস (৮ প্যাক)",
    oldPrice: "১৬০",
    newPrice: "১৫০",
    img: "/assets/ndls.jfif",
    off: "১০৳",
  },
];

export default function DiscountSection() {
  return (
    <section className="py-16 bg-base-200 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="flex flex-col items-center justify-center gap-2 mb-12 text-center">
          <div className="flex items-center gap-2 bg-rose-100 text-rose-600 px-4 py-1 rounded-full text-sm font-bold animate-pulse">
            <BadgePercent size={20} />
            <span>সাপ্তাহিক ধামাকা অফার</span>
          </div>
          <h2 className="text-center font-bold text-cyan-800 mb-10 text-3xl">
            সেরা দামে সেরা পণ্য
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {discountProducts.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 relative group transition-all hover:shadow-xl hover:border-cyan-200"
            >
              {/* Floating Discount Badge */}
              <div className="absolute -top-3 -right-2 bg-rose-600 text-white text-[11px] font-black px-3 py-1 rounded-lg z-10 shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform">
                {item.off} ছাড়
              </div>

              {/* Product Image */}
              <div className="w-full h-32 relative mb-6 overflow-hidden rounded-2xl bg-gray-50">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Details */}
              <div className="text-center">
                <h3 className="text-[15px] font-bold text-gray-700 h-11 line-clamp-2 mb-3 leading-tight">
                  {item.name}
                </h3>

                <div className="bg-gray-50 rounded-2xl py-2 group-hover:bg-cyan-50 transition-colors">
                  <span className="text-[11px] text-gray-400 line-through block mb-1">
                    পূর্বমূল্য: ৳{item.oldPrice}
                  </span>
                  <span className="text-2xl font-black text-cyan-800">
                    ৳{item.newPrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-gray-400 text-xs font-medium uppercase tracking-widest">
          সরাসরি দোকানে এসে সংগ্রহ করুন • সীমিত স্টক
        </p>
      </div>
    </section>
  );
}
