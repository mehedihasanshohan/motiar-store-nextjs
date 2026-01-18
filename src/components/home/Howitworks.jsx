'use client';
import React from 'react';
import { ClipboardCheck, Search, CheckCircle, Package, Truck, Smile } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "পণ্য পছন্দ করুন",
    desc: "আমাদের বিশাল তালিকা থেকে আপনার প্রয়োজনীয় সেরা পণ্যটি বেছে নিন।",
    icon: <Search className="text-orange-500" />,
  },
  {
    id: 2,
    title: "অর্ডার কনফার্ম করুন",
    desc: "সঠিক পরিমাণ এবং ঠিকানা দিয়ে আপনার অর্ডারটি আমাদের জানান।",
    icon: <ClipboardCheck className="text-orange-500" />,
  },
  {
    id: 3,
    title: "প্যাকিং চলছে",
    desc: "আমরা খুব যত্ন সহকারে পণ্যগুলো বাছাই করে প্যাকিং শুরু করি।",
    icon: <Package className="text-orange-500" />,
  },
  {
    id: 4,
    title: "গুণগত মান যাচাই",
    desc: "ডেলিভারির আগে প্রতিটি পণ্যের ফ্রেশনেস এবং মান নিশ্চিত করা হয়।",
    icon: <CheckCircle className="text-orange-500" />,
  },
  {
    id: 5,
    title: "ডেলিভারি শুরু",
    desc: "আমাদের নিজস্ব রাইডার দ্রুততম সময়ে আপনার ঠিকানায় রওনা দেয়।",
    icon: <Truck className="text-orange-500" />,
  },
  {
    id: 6,
    title: "হাতে পান পণ্য",
    desc: "হাসিমুখে আপনার ফ্রেশ বাজার বুঝে নিন। আমরা আপনার সন্তুষ্টি নিশ্চিত করি।",
    icon: <Smile className="text-orange-500" />,
  }
];

export default function Howitworks() {
  return (
    <section className="py-20 bg-[#FFF5F5]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center font-bold text-cyan-800 mb-10 text-3xl">
          কিভাবে অর্ডার করবেন?
        </h2>

        {/* Diamond Grid Layout */}
        <div className="flex flex-col items-center">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-[-50px] z-10">
            {steps.slice(0, 3).map((step) => (
              <StepCard key={step.id} step={step} />
            ))}
          </div>

          {/* Row 2 (Indented) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-[-50px] z-20">
            {steps.slice(3, 5).map((step) => (
              <StepCard key={step.id} step={step} />
            ))}
          </div>

          {/* Row 3 (Center) */}
          <div className="z-30">
            {steps.slice(5, 6).map((step) => (
              <StepCard key={step.id} step={step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const StepCard = ({ step }) => (
  <div className="relative w-[300px] h-[300px] flex items-center justify-center group">
    {/* Diamond Shape Background */}
    <div className="absolute inset-0 bg-white rotate-45 rounded-[40px] shadow-xl border border-rose-100 transition-all duration-300 group-hover:shadow-rose-200 group-hover:scale-105"></div>

    {/* Content (No Rotation) */}
    <div className="relative z-10 text-center p-8 flex flex-col items-center">
      <div className="mb-4 p-3 bg-rose-50 rounded-full">
        {step.icon}
      </div>
      <div className="flex items-start gap-1">
        <span className="text-3xl font-black text-orange-200 leading-none">{step.id}</span>
        <h3 className="text-lg font-bold text-gray-800 mt-1">{step.title}</h3>
      </div>
      <p className="text-xs text-gray-500 mt-2 leading-relaxed">
        {step.desc}
      </p>
    </div>
  </div>
);