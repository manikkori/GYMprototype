import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Target, Shield, Zap, HeartPulse } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".facility-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".facility-grid",
            start: "top 80%",
          },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-dark">
      {/* --- STORY SPLIT SECTION --- */}
      <section className="grid md:grid-cols-2 min-h-[60vh] md:min-h-[80vh]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-surface2 p-8 sm:p-12 md:p-16 flex flex-col justify-center order-2 md:order-1"
        >
          <h1 className="font-bebas text-6xl md:text-7xl lg:text-8xl text-light mb-6 leading-none tracking-wider">
            FORGED IN <br />
            <span className="text-primary">IRON</span>
          </h1>
          <div className="w-16 h-1 bg-primary mb-8"></div>
          <p className="text-muted text-sm sm:text-base mb-6 max-w-md leading-relaxed font-inter">
            PowerFit isn't just a gym; it's a sanctuary for the dedicated.
            Founded in 2011, we stripped away the spa-like distractions to focus
            on what truly matters: raw, unfiltered progress.
          </p>
          <p className="text-muted text-sm sm:text-base max-w-md leading-relaxed font-inter">
            Whether you are a professional athlete or a beginner ready to put in
            the work, our doors are open to those who respect the grind.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative h-64 sm:h-80 md:h-auto order-1 md:order-2"
        >
          <img
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1470&auto=format&fit=crop"
            alt="Gym Rack"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent md:bg-dark/20"></div>
        </motion.div>
      </section>

      {/* --- FACILITIES GRID --- */}
      <section
        ref={sectionRef}
        className="py-24 max-w-7xl mx-auto px-4 facility-grid"
      >
        <div className="text-center mb-16">
          <h2 className="font-bebas text-5xl md:text-6xl text-light tracking-wide">
            CORE <span className="text-primary">FACILITIES</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Target,
              title: "Precision Gear",
              desc: "Calibrated plates and competition-grade racks.",
            },
            {
              icon: Shield,
              title: "Safe Training",
              desc: "Spacious lifting platforms with drop-safe flooring.",
            },
            {
              icon: Zap,
              title: "High Energy",
              desc: "Custom lighting and sound systems to keep you in the zone.",
            },
            {
              icon: HeartPulse,
              title: "Recovery",
              desc: "Post-workout mobility tools and dedicated stretch areas.",
            },
          ].map((facility, i) => (
            <div
              key={i}
              className="facility-card bg-surface border border-border p-8 hover:border-primary/50 transition-colors"
            >
              <div className="w-14 h-14 bg-dark border border-border rounded-full flex items-center justify-center mb-6 text-primary">
                <facility.icon strokeWidth={1.5} size={24} />
              </div>
              <h3 className="font-bebas text-3xl text-light mb-3 tracking-wide">
                {facility.title}
              </h3>
              <p className="text-muted font-inter text-sm leading-relaxed">
                {facility.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
