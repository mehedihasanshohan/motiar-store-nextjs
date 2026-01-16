import React from 'react'
import Link from 'next/link'
import { Facebook, Mail, Linkedin, ShoppingBasket, Github } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

        {/* কলাম ১: ব্র্যান্ড ও স্লোগান */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 mb-4 group">
            <div className="bg-cyan-700 p-2 rounded-lg text-white">
              <ShoppingBasket size={20} />
            </div>
            <h2 className="text-xl font-black text-gray-800 uppercase tracking-tighter">
              মতিয়ার <span className="text-cyan-700">স্টোর</span>
            </h2>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
            আপনার পরিবারের জন্য সেরা মানের নিত্যপ্রয়োজনীয় পণ্য পৌঁছে দেয়াই আমাদের লক্ষ্য। ২০ বছরেরও বেশি সময় ধরে আমরা আপনার আস্থার সঙ্গী।
          </p>
        </div>

        {/* কলাম ২: কুইক লিঙ্কস */}
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-gray-800 uppercase text-xs tracking-[2px] mb-2">প্রয়োজনীয় লিঙ্ক</h3>
          <Link href="/products" className="text-gray-500 hover:text-cyan-700 text-sm transition-colors font-medium">সব পণ্য</Link>
          <Link href="/about" className="text-gray-500 hover:text-cyan-700 text-sm transition-colors font-medium">আমাদের সম্পর্কে</Link>
          <Link href="/contact" className="text-gray-500 hover:text-cyan-700 text-sm transition-colors font-medium">যোগাযোগ</Link>
          <Link href="/privacy" className="text-gray-500 hover:text-cyan-700 text-sm transition-colors font-medium">প্রাইভেসি পলিসি</Link>
        </div>

        {/* কলাম ৩: সোশ্যাল মিডিয়া ও কানেক্ট */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-bold text-gray-800 uppercase text-xs tracking-[2px] mb-4">আমাদের সাথে যুক্ত থাকুন</h3>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" className="p-2.5 bg-gray-50 rounded-full text-gray-400 hover:bg-cyan-700 hover:text-white transition-all shadow-sm">
              <Facebook size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" className="p-2.5 bg-gray-50 rounded-full text-gray-400 hover:bg-cyan-700 hover:text-white transition-all shadow-sm">
              <Linkedin size={18} />
            </a>
            <a href="mailto:info@motiarstore.com" className="p-2.5 bg-gray-50 rounded-full text-gray-400 hover:bg-cyan-700 hover:text-white transition-all shadow-sm">
              <Mail size={18} />
            </a>
          </div>
          <p className="mt-4 text-[11px] text-gray-400 italic">সকাল ৮টা - রাত ১০টা পর্যন্ত খোলা</p>
        </div>
      </div>

      {/* কপিরাইট অংশ */}
      <div className="mt-16 pt-8 border-t border-gray-50 text-center flex flex-col items-center gap-2">
        <p className="text-gray-400 text-xs">
          © {new Date().getFullYear()} <span className="font-bold text-cyan-800">Motiar Store</span>. All rights reserved.
        </p>
        <p className="text-[10px] text-gray-300 uppercase tracking-widest font-medium">
          Fresh • Quality • Trust
        </p>
      </div>
    </footer>
  )
}

export default Footer;