'use client';
import { HelpCircle } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      question: "মতিয়ার স্টোর কি খোলা আছে?",
      answer: "আমাদের দোকান প্রতিদিন সকাল ৮টা থেকে রাত ১০টা পর্যন্ত খোলা থাকে। আপনার প্রয়োজনীয় সব সওদা করতে সরাসরি চলে আসুন।"
    },
    {
      question: "আমি কি ফোনে জিনিসের দাম জানতে পারবো?",
      answer: "অবশ্যই! আমাদের ওয়েবসাইটে দেওয়া নাম্বারে কল দিয়ে আপনি Mojo, Speed বা চাল-ডালের বর্তমান বাজার দর জেনে নিতে পারেন।"
    },
    {
      question: "আপনাদের দোকানে কি কি পাওয়া যায়?",
      answer: "আমাদের এখানে চাল, ডাল, তেল, লবণ থেকে শুরু করে Mojo, Speed, কোল্ড ড্রিংকস, সাবান, শ্যাম্পু, ফেসওয়াশ এবং সব ধরণের কসমেটিকস ও স্টেশনারি আইটেম পাওয়া যায়।"
    },
    {
      question: "বড় অর্ডারের ক্ষেত্রে কি হোম ডেলিভারি পাওয়া যাবে?",
      answer: "আমরা সাধারণত সরাসরি দোকানেই পণ্য বিক্রি করি। তবে আপনি যদি এলাকার আশেপাশে হন এবং বড় কোনো অনুষ্ঠান (যেমন মিলাদ বা অনুষ্ঠান) থাকে, তবে ফোনে কথা বলে ডেলিভারির ব্যবস্থা করা যেতে পারে।"
    },
    {
      question: "পেমেন্ট কি বিকাশ বা নগদে করা যাবে?",
      answer: "হ্যাঁ, দোকানে এসে কেনাকাটা করার পর আপনি নগদ টাকার পাশাপাশি বিকাশ বা নগদের মাধ্যমেও পেমেন্ট করতে পারবেন।"
    }
  ];

  return (
    <section className="py-16 bg-base-200 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col items-center mb-10" data-aos="fade-down">
           <HelpCircle className="text-cyan-700 mb-2" size={40} />
           <h2 className="text-3xl font-bold text-cyan-900 text-center uppercase tracking-wide">প্রয়োজনীয় তথ্য (FAQ)</h2>
           <div className="h-1 w-20 bg-cyan-600 mt-2 rounded-full"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="collapse collapse-plus bg-base-100 border border-base-300 shadow-sm transition-all hover:shadow-md"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <input type="radio" name="faq-accordion" defaultChecked={index === 0} />
              <div className="collapse-title text-lg font-bold text-gray-800 pr-10">
                {faq.question}
              </div>
              <div className="collapse-content text-gray-600 border-t border-base-200 pt-4">
                <p className="leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}