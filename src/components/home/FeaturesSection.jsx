'use client';
import { ShieldCheck, Scale, HeartHandshake, Zap } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck size={40} className="text-emerald-600" />,
    title: "১০০% খাঁটি পণ্য",
    desc: "সরাসরি মিল এবং বিশ্বস্ত সোর্স থেকে সংগৃহীত ফ্রেশ পণ্য।"
  },
  {
    icon: <Scale size={40} className="text-cyan-600" />,
    title: "সঠিক ওজন",
    desc: "ওজনে কোনো কারচুপি নেই, প্রতিটি গ্রাম নিশ্চিত করা হয়।"
  },
  {
    icon: <HeartHandshake size={40} className="text-rose-600" />,
    title: "বিশ্বস্ত সেবা",
    desc: "দীর্ঘ ২০ বছর ধরে আমরা আপনাদের সেবায় নিয়োজিত।"
  },
  {
    icon: <Zap size={40} className="text-amber-600" />,
    title: "দ্রুত কেনাকাটা",
    desc: "সরাসরি দোকানে এসে মুহূর্তের মধ্যেই আপনার বাজার সেরে নিন।"
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-12 bg-base-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl border border-gray-300 bg-base-100
               hover:bg-white hover:shadow-2xl transition-all duration-300 text-center"
            >
              <div className="mb-6 inline-block p-4 bg-white rounded-2xl shadow-sm
               group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}