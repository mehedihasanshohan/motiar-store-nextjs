"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CheckCircle, Truck, Star, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const features = [
    {
      icon: <ShieldCheck className="text-cyan-600" size={40} />,
      title: "সেরা মান (Premium Quality)",
      desc: "আমরা সরাসরি বাছাইকৃত উৎস থেকে ফ্রেশ এবং খাঁটি পণ্য সংগ্রহ করি।",
    },
    {
      icon: <Truck className="text-cyan-600" size={40} />,
      title: "দ্রুত ডেলিভারি",
      desc: "আপনার দৈনন্দিন প্রয়োজনীয় পণ্য দ্রুততম সময়ে আপনার দোরগোড়ায় পৌঁছে দেই।",
    },
    {
      icon: <CheckCircle className="text-cyan-600" size={40} />,
      title: "সঠিক ওজন",
      desc: "মতিয়ার স্টোরে ওজনে কোনো কারচুপি নেই, আমরা স্বচ্ছতায় বিশ্বাসী।",
    },
    {
      icon: <Star className="text-cyan-600" size={40} />,
      title: "সেরা কাস্টমার সার্ভিস",
      desc: "যেকোনো সমস্যায় আমাদের সাপোর্ট টিম সবসময় আপনার পাশে আছে।",
    },
  ];

  return (
    <div className="bg-base-200 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-cyan-900 text-white text-center">
        <div className="container mx-auto px-6" data-aos="zoom-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">মতিয়ার স্টোর</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            ১৯৯০ সাল থেকে আপনার আস্থার প্রতীক। আমরা শুধু পণ্য নয়, বিশ্বাস পৌঁছে
            দিই আপনার ঘরে।
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div data-aos="fade-right">
          <Image
            src="/assets/6.jpg"
            height={400}
            width={600}
            className="object-cover rounded-md"
            // fill
            alt="Motiar Store Interior"
            // className="rounded-2xl shadow-2xl border-4 border-red-100"
          />
        </div>
        <div className="space-y-6" data-aos="fade-left">
          <h1>আমাদের গল্প</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            মতিয়ার স্টোর একটি পারিবারিক ঐতিহ্য। আমার বাবার হাত ধরে শুরু হওয়া এই
            ক্ষুদ্র প্রচেষ্টা আজ এলাকার মানুষের সবচেয়ে বিশ্বস্ত মদি দোকানে পরিণত
            হয়েছে। আমরা বিশ্বাস করি, খাবারের মান ভালো হলে স্বাস্থ্য ভালো থাকে।
            তাই প্রতিটি পণ্য আমরা নিজে যাচাই করে তবেই সেল করি।
          </p>
          <button className="bg-cyan-700 text-white px-8 py-3 rounded-full hover:bg-cyan-800 transition">
            আমাদের পণ্যগুলো দেখুন
          </button>
        </div>
      </section>

      {/* Why Choose Us - Features Grid */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12" data-aos="fade-up">
            <h1>কেন আমাদের বেছে নেবেন?</h1>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 text-center border-b-4 border-cyan-600"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 container mx-auto px-6 text-center">
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-cyan-700 text-white p-10 rounded-3xl"
          data-aos="flip-up"
        >
          <div>
            <h2 className="text-4xl font-bold">৩২+</h2>
            <p className="opacity-80">বছরের অভিজ্ঞতা</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold">৫০০০+</h2>
            <p className="opacity-80">সন্তুষ্ট ক্রেতা</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold">১০০০+</h2>
            <p className="opacity-80">পণ্য তালিকা</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold">১০০%</h2>
            <p className="opacity-80">খাঁটি মান</p>
          </div>
        </div>
      </section>
    </div>
  );
}
