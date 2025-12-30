"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const events = [
  {
    title: "Sunday Worship Service",
    date: "Every Sunday",
    time: "9:00 AM & 11:00 AM",
    location: "Main Sanctuary",
    description: "Join us for powerful worship, prayer, and an inspiring message from God's Word.",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop",
    featured: true,
  },
  {
    title: "Wednesday Bible Study",
    date: "Every Wednesday",
    time: "7:00 PM",
    location: "Fellowship Hall",
    description: "Deep dive into Scripture with our mid-week Bible study sessions.",
    image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=600&h=400&fit=crop",
    featured: false,
  },
  {
    title: "Youth Night",
    date: "Every Friday",
    time: "6:30 PM",
    location: "Youth Center",
    description: "A night of fun, fellowship, and faith for our young people.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop",
    featured: false,
  },
  {
    title: "New Year Prayer Conference",
    date: "January 1-3, 2025",
    time: "6:00 PM - 9:00 PM",
    location: "Main Sanctuary",
    description: "Start the year anchored in prayer with our annual prayer conference.",
    image: "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=600&h=400&fit=crop",
    featured: false,
  },
];

export function EventsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="events" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-[0.3em] uppercase">
            Mark Your Calendar
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[hsl(220,40%,13%)] mt-4 mb-6">
            Upcoming Events
          </h2>
          <p className="text-[hsl(220,10%,40%)] text-lg max-w-2xl mx-auto">
            Stay connected with what&apos;s happening at AFGHM. We have something for everyone!
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Events grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${event.featured ? "lg:col-span-2" : ""
                }`}
            >
              <div
                className={`flex flex-col ${event.featured ? "lg:flex-row" : ""
                  }`}
              >
                {/* Image */}
                <div
                  className={`relative overflow-hidden ${event.featured ? "lg:w-1/2 h-64 lg:h-auto" : "h-48"
                    }`}
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  {event.featured && (
                    <div className="absolute top-4 left-4 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className={`p-6 ${event.featured ? "lg:w-1/2 lg:p-10" : ""}`}>
                  <h3 className="text-xl lg:text-2xl font-bold text-[hsl(220,40%,13%)] mb-4 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-3 text-[hsl(220,10%,40%)]">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-[hsl(220,10%,40%)]">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-[hsl(220,10%,40%)]">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <p className="text-[hsl(220,10%,40%)] mb-6">{event.description}</p>

                  <Button
                    variant="outline"
                    className="border-primary text-primary bg-transparent hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all events */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="bg-[hsl(220,40%,13%)] hover:bg-[hsl(220,40%,20%)] text-white font-semibold px-10 py-6 text-lg"
          >
            View All Events
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
