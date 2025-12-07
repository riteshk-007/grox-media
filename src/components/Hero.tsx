"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const Hero = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video plays when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log("Video autoplay prevented:", err);
      });
    }
  }, []);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e?: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();
    const newErrors: typeof errors = {};

    // Validation
    if (!formData.name.trim()) newErrors.name = "Name is required";
    const emailRe = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRe.test(formData.email)) {
      newErrors.email = "Invalid email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    // Message is optional, so no validation needed

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          mobileNumber: formData.phone,
          message: formData.message,
        }),
      });

      const json = await res.json();

      if (!res.ok) {
        toast.error(json?.error || "Failed to send message");
        setIsSubmitting(false);
        return;
      }

      toast.success(json?.message || "Message sent successfully!");

      setIsSubmitted(true);
      setIsSubmitting(false);

      setTimeout(() => {
        setFormData({ name: "", email: "", phone: "", message: "" });
        setIsSubmitted(false);
      }, 3000);
    } catch (err) {
      console.error(err);
      toast.error("Network error. Please try again later.");
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative w-full lg:h-[85dvh] md:bg-white p-2 overflow-x-hidden overflow-y-auto pt-24 md:pt-20">
      {/* Desktop Video Background */}
      <div className="hidden md:block absolute top-0 right-0 w-1/2 h-full overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://pub-a3d2b35862c1483894ffbee942bb995e.r2.dev/bgvideo.mp4"
            type="video/webm"
          />
        </video>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Mobile Background Image */}
      <div
        className="md:hidden absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://pub-a3d2b35862c1483894ffbee942bb995e.r2.dev/photo-1460925895917-afdab827c52f%5B1%5D')`,
        }}
      >
        <div className="absolute inset-0 bg-black/75"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-3 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative md:text-black text-white space-y-8 order-first lg:order-first p-5"
            >
              <div className="relative z-20 space-y-6">
                <span className="text-sm uppercase tracking-widest font-medium text-gray-300 md:text-gray-600">
                  Digital Excellence Redefined
                </span>

                <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-white md:text-gray-900 drop-shadow-lg">
                  We Build <span className="text-groxBlue">Digital</span> <br />
                  <span className="text-groxOrange">Experiences</span> That
                  Matter
                </h1>

                <p className="text-lg text-gray-100 md:text-gray-700 font-medium drop-shadow">
                  Grox Media transforms your vision into powerful digital
                  solutions. We specialize in cutting-edge web development,
                  stunning design, and strategic growth.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => router.push("/portfolio")}
                    className="bg-groxBlue hover:bg-blue-800 text-white text-lg px-8 py-6 h-auto"
                  >
                    View Our Work
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>

                <div className="flex items-center gap-6 text-sm font-medium text-gray-300 md:text-gray-500">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-groxOrange" />
                    <span>Verified Agency</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-groxOrange" />
                    <span>Top Rated</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center lg:justify-end order-first lg:order-last"
            >
              <div className="w-full max-w-lg sm:max-w-lg relative z-20">
                <div className="bg-white/95 backdrop-blur-md rounded p-8 sm:p-10 pb-10 shadow-2xl border-2 border-groxBlue/20 overflow-visible">
                  {!isSubmitted ? (
                    <>
                      <div className="mb-6">
                        <h3 className="text-3xl font-bold mb-2 text-gray-900">
                          Get Free Consultation
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Fill out the form and we&apos;ll get back to you
                          within 24 hours
                        </p>
                      </div>

                      <div className="space-y-4 pb-2">
                        <div>
                          <input
                            aria-label="Your name"
                            type="text"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={(e) =>
                              handleInputChange("name", e.target.value)
                            }
                            className={`w-full p-2 rounded-lg border-2 outline-none bg-gray-50 text-black placeholder:text-gray-500 transition-all duration-200 focus:bg-white focus:shadow-lg text-base ${
                              errors.name
                                ? "border-red-400 focus:border-red-500"
                                : "border-gray-300 focus:border-groxBlue"
                            }`}
                          />
                          {errors.name && (
                            <p className="text-red-500 text-sm mt-2">
                              {errors.name}
                            </p>
                          )}
                        </div>

                        <div>
                          <input
                            aria-label="Your email"
                            type="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={(e) =>
                              handleInputChange("email", e.target.value)
                            }
                            className={`w-full p-2 rounded-lg border-2 outline-none bg-gray-50 text-black placeholder:text-gray-500 transition-all duration-200 focus:bg-white focus:shadow-lg text-base ${
                              errors.email
                                ? "border-red-400 focus:border-red-500"
                                : "border-gray-300 focus:border-groxBlue"
                            }`}
                          />
                          {errors.email && (
                            <p className="text-red-500 text-sm mt-2">
                              {errors.email}
                            </p>
                          )}
                        </div>

                        <div>
                          <input
                            aria-label="Your phone"
                            type="tel"
                            placeholder="Your Phone"
                            value={formData.phone}
                            onChange={(e) =>
                              handleInputChange("phone", e.target.value)
                            }
                            className={`w-full p-2 rounded-lg border-2 outline-none bg-gray-50 text-black placeholder:text-gray-500 transition-all duration-200 focus:bg-white focus:shadow-lg text-base ${
                              errors.phone
                                ? "border-red-400 focus:border-red-500"
                                : "border-gray-300 focus:border-groxBlue"
                            }`}
                          />
                          {errors.phone && (
                            <p className="text-red-500 text-sm mt-2">
                              {errors.phone}
                            </p>
                          )}
                        </div>

                        <div>
                          <textarea
                            aria-label="Optional message"
                            placeholder="Message (Optional)"
                            rows={3}
                            value={formData.message}
                            onChange={(e) =>
                              handleInputChange("message", e.target.value)
                            }
                            className="w-full p-2 rounded-lg border-2 border-gray-300 bg-gray-50 text-black placeholder:text-gray-500 outline-none resize-none focus:border-groxBlue focus:bg-white focus:shadow-lg transition-all duration-200 text-base"
                          />
                          {errors.message && (
                            <p className="text-red-500 text-sm mt-2">
                              {errors.message}
                            </p>
                          )}
                        </div>

                        <div className="pt-2">
                          <button
                            onClick={() => handleSubmit()}
                            disabled={isSubmitting}
                            type="button"
                            className="w-full bg-gradient-to-r from-groxBlue to-blue-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-groxBlue disabled:opacity-50 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-[1.02] text-lg cursor-pointer"
                          >
                            {isSubmitting
                              ? "Submitting..."
                              : "Get Free Consultation"}
                          </button>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-10">
                      <div className="w-20 h-20 bg-gradient-to-br from-groxBlue to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center animate-pulse shadow-lg">
                        <svg
                          className="w-10 h-10 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-gray-900">
                        Thank You!
                      </h3>
                      <p className="text-gray-700 text-base mb-2">
                        We will contact you soon.
                      </p>
                      <p className="text-gray-500 text-sm">
                        Our team will try to call you within 12 hours.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
