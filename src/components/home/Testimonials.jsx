'use client';
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    { name: "আব্দুর রহিম", review: "মতিয়ার স্টোরের চাল সবসময় ফ্রেশ থাকে। একদম নির্ভেজাল!", rating: 5 },
    { name: "সুমনা আক্তার", review: "অনলাইনে অর্ডার করে এত দ্রুত ডেলিভারি পাবো ভাবিনি। ধন্যবাদ!", rating: 5 },
    { name: "করিম চাচা", review: "ওজনে একদম সঠিক থাকে, বাবার আমল থেকে এখান থেকেই বাজার করি।", rating: 5 },
  ];

  return (
    <section className="py-16 bg-base-200">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-cyan-700 mb-12">ক্রেতারা যা বলছেন</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((item, index) => (
            <div key={index} className="p-8 rounded-md bg-base-100 relative shadow-sm hover:shadow-md transition">
              <Quote className="absolute top-4 right-4 text-cyan-200" size={40} />
              <div className="flex mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="text-orange-400 fill-orange-400" size={18} />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">{item.review}</p>
              <h4 className="font-bold text-cyan-700">- {item.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}