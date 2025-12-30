"use client";

import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { Heart, Send, Sparkles } from "lucide-react";
import { useRef, useState } from "react";

export function PrayerRequestSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    request: "",
    isPublic: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, you would send this to your backend
    console.log("Prayer request submitted:", formData);
  };

  return (
    <section id="prayer" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <span className="text-primary font-semibold tracking-wider uppercase text-sm">
                  Prayer Support
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                How Can We <br />
                <span className="text-primary">Pray For You?</span>
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                We believe in the power of prayer. Our prayer team is dedicated
                to standing with you in faith. Whether it&apos;s a challenge
                you&apos;re facing or a praise report, we&apos;d love to join
                you in prayer.
              </p>

              <ul className="space-y-4">
                {[
                  "Confidential prayer support",
                  "Dedicated prayer team",
                  "Weekly prayer meetings",
                ].map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-center gap-3 text-slate-700 font-medium"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Form Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/10 blur-2xl rounded-3xl -rotate-3" />
              <div className="relative bg-white border border-slate-200 p-8 md:p-10 rounded-3xl shadow-2xl">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="prayer-name"
                        className="block text-slate-700 text-sm font-semibold mb-2"
                      >
                        Your Name (Optional)
                      </label>
                      <input
                        type="text"
                        id="prayer-name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        placeholder="Anonymous"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="prayer-request"
                        className="block text-slate-700 text-sm font-semibold mb-2"
                      >
                        Your Prayer Request
                      </label>
                      <textarea
                        id="prayer-request"
                        required
                        rows={4}
                        value={formData.request}
                        onChange={(e) =>
                          setFormData({ ...formData, request: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                        placeholder="Tell us how we can pray..."
                      />
                    </div>

                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="is-public"
                        checked={formData.isPublic}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            isPublic: e.target.checked,
                          })
                        }
                        className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary"
                      />
                      <label
                        htmlFor="is-public"
                        className="text-sm text-slate-600 cursor-pointer"
                      >
                        Keep this request confidential (only for our prayer
                        team)
                      </label>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 rounded-xl shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:-translate-y-1 group"
                    >
                      <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      Submit Request
                    </Button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Sparkles className="w-10 h-10 text-primary animate-pulse" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      Request Received
                    </h3>
                    <p className="text-slate-600 mb-8">
                      Thank you for sharing with us. Our prayer team will be
                      standing in faith with you.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setIsSubmitted(false)}
                      className="border-primary text-primary hover:bg-primary/5"
                    >
                      Submit Another Request
                    </Button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
