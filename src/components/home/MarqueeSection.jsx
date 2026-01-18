"use client";
import Image from "next/image";
import React from "react";

const products = [
  { name: "চাল", img: "/assets/chal.jpg" },
  { name: "ডাল", img: "/assets/dal.jpg" },
  { name: "সয়াবিন তেল", img: "/assets/soyabin.jpg" },
  { name: "আটা", img: "/assets/ata.jpg" },
  { name: "নুডলস", img: "/assets/ndls.jpg" },
  { name: "কেক", img: "/assets/cake2.jpg" },
  { name: "বিস্কুট", img: "/assets/biscuit.jpg" },
  { name: "সাবান", img: "/assets/soap.jpg" },
  { name: "পেস্ট", img: "/assets/paste.jpg" },
  { name: "চকলেট", img: "/assets/chocolate.jpg" },
];

const MarqueeSection = () => {
  return (
    <div className="bg-base-200 mt-12 py-12 overflow-hidden relative">
      <h2 className="text-center font-bold text-cyan-800 mb-10 text-3xl">
        আমাদের জনপ্রিয় পণ্যসমূহ
      </h2>

      {/* Tailwind Animation Wrapper */}
      <div className="flex w-full overflow-hidden group">
        <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap group-hover:[animation-play-state:paused]">
          {[...products, ...products, ...products].map((product, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-8 min-w-35 text-center"
            >
              <div className="w-32 h-32 mb-3 relative rounded-full border-4 border-white shadow-sm bg-white overflow-hidden">
                <Image
                  src={product.img}
                  alt={product.name}
                  width={150}
                  height={150}
                  className="w-full h-full object-cover transition-transform hover:scale-110"
                />
              </div>
              <span className="font-semibold text-cyan-900 text-sm bg-white px-4 py-1 rounded-full shadow-sm border border-cyan-100">
                {product.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}} />
    </div>
  );
};

export default MarqueeSection;