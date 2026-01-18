'use client';
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { User, MessageCircle, ShieldCheck, Mail } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    if (data.captcha.trim().toLowerCase() !== "human") {
      toast.error("Captcha failed. Type 'human' correctly.");
      return;
    }

    const loadingToast = toast.loading("Sending message...");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Message sent successfully!", { id: loadingToast });
      reset();
    } catch (error) {
      toast.error("Failed to send message.", { id: loadingToast });
    }
  };

  return (
    <section className="py-12 bg-base-200 text-base-content px-6 grid lg:grid-cols-2 gap-6 overflow-hidden">
      {/* Left Side: Map */}
      <div
        className="space-y-6 rounded-md p-4 relative z-20 border border-white/20"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <h2 className="text-center font-semibold text-cyan-800 mb-10 text-3xl">Find US</h2>
        <div className="mt-4">
          <iframe
            title="Google Map"
            className="w-full h-96 rounded-md border"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9473.890579261959!2d89.74307928158778!3d23.722967945193478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe3e50bb24f0e9%3A0xccf6fe471df8eca2!2sMotiar%20General%20Store!5e0!3m2!1sen!2sbd!4v1768558234043!5m2!1sen!2sbd"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Right Side: Form */}
      <div
        className="space-y-6 rounded-md p-6 relative z-20 border border-white/20"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <h2 className="text-center font-semibold text-cyan-800 mb-10 text-3xl">Send Us Message</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Field */}
          <div className="relative">
            <User className="absolute left-3 top-3 text-cyan-700" size={20} />
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              placeholder="Your Name"
              className="w-full pl-10 p-3 rounded-md border border-base-300 focus:outline-none
              focus:ring-2 focus:ring-cyan-500 bg-white text-black"
            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
          </div>

          {/* Email Field */}
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-cyan-700" size={20} />
            <input
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
              })}
              type="email"
              placeholder="Your Email"
              className="w-full pl-10 p-3 rounded-md border border-base-300 focus:outline-none
              focus:ring-2 focus:ring-cyan-500 bg-white text-black"
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>

          {/* Captcha Field */}
          <div className="relative">
            <ShieldCheck className="absolute left-3 top-3 text-cyan-700" size={20} />
            <input
              {...register("captcha", { required: "Captcha is required" })}
              type="text"
              placeholder="Type 'human'"
              className="w-full pl-10 p-3 rounded-md border border-base-300 focus:outline-none
              focus:ring-2 focus:ring-cyan-500 bg-white text-black"
            />
          </div>

          {/* Message Field */}
          <div className="relative">
            <MessageCircle className="absolute left-3 top-3 text-cyan-700" size={20} />
            <textarea
              {...register("message", { required: "Message cannot be empty" })}
              placeholder="Your Message"
              rows="4"
              className="w-full pl-10 p-3 rounded-md border border-base-300 focus:outline-none
              focus:ring-2 focus:ring-cyan-500 bg-white text-black"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-cyan-700 hover:bg-cyan-800 text-white font-semibold py-3
            px-4 rounded-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}