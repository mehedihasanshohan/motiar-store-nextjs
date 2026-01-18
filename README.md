# Motiar Store - Modern Grocery E-commerce

**মতিয়ার স্টোর** একটি আধুনিক ই-কমার্স ওয়েব অ্যাপ্লিকেশন যা বিশেষভাবে আমার বাবার মুদি দোকানের জন্য ডিজাইন এবং ডেভেলপ করা হয়েছে। এটি Next.js এবং Tailwind CSS ব্যবহার করে তৈরি করা একটি হাই-পারফরম্যান্স শপিং প্ল্যাটফর্ম।

---

## Live Demo
- **Live Site:** []
- **Express Server API:** []

### Mock Login Credentials
অ্যাসাইনমেন্ট চেক করার জন্য নিচের ক্রেডেনশিয়াল ব্যবহার করুন:
- **Email:** `mh@gmail.com`
- **Password:** `123456`

---

## Short Project Description
এই প্রজেক্টটির মূল লক্ষ্য হলো একটি সাধারণ মুদি দোকানের ব্যবসায়িক কার্যক্রমকে ডিজিটাল রূপান্তর করা। কাস্টমাররা যাতে সহজে দোকানের পণ্যগুলো দেখতে পারে, দাম যাচাই করতে পারে এবং কেনাকাটা করতে পারে, সেই উদ্দেশ্যেই এটি তৈরি। এর প্রিমিয়াম ডিজাইন এবং দ্রুতগতির ইউজার ইন্টারফেস কেনাকাটার অভিজ্ঞতাকে সহজ ও আনন্দদায়ক করে তোলে।

---

## Implemented Features
- **Mock Authentication:** ইমেইল ও পাসওয়ার্ড দিয়ে লগইন করার সুবিধা এবং সেশন কুকিতে স্টোর করা।
- **Dynamic Product Grid:** এক্সপ্রেস সার্ভার থেকে ডাটা ফেচ করে ক্যাটাগরি অনুযায়ী পণ্য প্রদর্শন।
- **Detailed Product View:** প্রতিটি পণ্যের জন্য ডাইনামিক রুট ব্যবহার করে আলাদা ডিটেইলস পেজ।
- **Modern Responsive UI:** মোবাইল, ট্যাবলেট এবং ডেস্কটপ—সব ডিভাইসের জন্য ১০০% অপ্টিমাইজড।
- **SweetAlert2 Notifications:** লগইন সাকসেস বা এরর মেসেজের জন্য সুন্দর পপ-আপ অ্যালার্ট।

---

## Technologies Used
- **Frontend:** Next.js 15 (App Router), Tailwind CSS, DaisyUI.
- **Backend:** Express.js (Node.js).
- **Authentication:** NextAuth.js / Cookies.
- **Notifications:** SweetAlert2.

---

## Brief Explanation of Key Features
- **Authentication & Cookies:** NextAuth ব্যবহার করে ক্রেডেনশিয়াল লগইন ইমপ্লিমেন্ট করা হয়েছে। লগইন স্টেট কুকিতে সেভ থাকে, ফলে পেজ রিফ্রেশ করলেও ইউজার লগআউট হয় না।
- **Middleware Protection:** মিডলওয়্যার ব্যবহার করে রুট প্রোটেকশন নিশ্চিত করা হয়েছে। কেউ লগইন না করে `/add-item` এ যাওয়ার চেষ্টা করলে তাকে অটোমেটিক লগইন পেজে পাঠিয়ে দেওয়া হয়।
- **Server-Side Fetching:** ডাইনামিক ডাটা সরাসরি সার্ভার থেকে ফেচ করা হয়, যা ওয়েবসাইটকে ফাস্ট এবং এসইও (SEO) ফ্রেন্ডলি করে তোলে।

---

## Route Summary
| Route | Description | Accessibility |
| :--- | :--- | :--- |
| `/` | Home Page - ৭টি বিশেষ সেকশন সহ ল্যান্ডিং পেজ। | Public |
| `/products` | Product List - সব পণ্যের তালিকা। | Public |
| `/products/[id]` | Product Details - একক পণ্যের বিস্তারিত। | Protected |
| `/login` | Authentication - ডেমো ক্রেডেনশিয়াল দিয়ে লগইন। | Public |

---

## Setup & Installation Instructions

১. প্রজেক্টটি ক্লোন করুন:
```bash
git clone [https://github.com/mehedihasanshohan/motiar-store-nextjs.git]
cd motiar-store-nextjs