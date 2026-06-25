import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Target, Shield, Zap, HeartPulse, Flame, Dumbbell } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const parallaxRef = useRef(null);
  const textRevealRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Hero Image Parallax Effect
      gsap.to(".parallax-bg", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // 2. Big Text Scroll Reveal
      const textElements = gsap.utils.toArray(".reveal-text");
      textElements.forEach((text) => {
        gsap.fromTo(
          text,
          { backgroundPositionX: "100%" },
          {
            backgroundPositionX: "0%",
            ease: "none",
            scrollTrigger: {
              trigger: text,
              start: "top 85%",
              end: "top 30%",
              scrub: 1,
            },
          },
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Framer Motion Variants for Grid
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <div ref={containerRef} className="bg-dark min-h-screen pt-20">
      {/* --- PARALLAX HERO SECTION --- */}
      <section
        ref={parallaxRef}
        className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden border-b border-border"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-dark/60 z-10"></div>
          {/* Parallax Image */}
          <img
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2000&auto=format&fit=crop"
            alt="Gym Interior"
            className="parallax-bg w-full h-[130%] object-cover object-center -top-[15%]"
          />
        </div>

        <div className="relative z-20 text-center px-4 w-full max-w-5xl mx-auto mt-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Dumbbell
              className="text-primary w-16 h-16 mx-auto mb-6"
              strokeWidth={1}
            />
            <h1 className="font-bebas text-6xl md:text-8xl lg:text-9xl text-light tracking-widest leading-none mb-4 shadow-black drop-shadow-2xl">
              OUR <span className="text-primary">STORY</span>
            </h1>
            <p className="font-inter text-muted text-sm md:text-lg tracking-[0.3em] uppercase">
              Forged in Iron. Built for Greatness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- SCROLL REVEAL TEXT SECTION (Modern Web Trend) --- */}
      <section className="py-24 md:py-32 px-4 max-w-6xl mx-auto text-center md:text-left">
        <div
          ref={textRevealRef}
          className="space-y-6 md:space-y-8 font-bebas text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-wide"
        >
          <h2
            className="reveal-text text-transparent bg-clip-text bg-gradient-to-r from-light via-light to-muted/20"
            style={{ backgroundSize: "200% 100%" }}
          >
            WE DIDN'T BUILD A GYM.
          </h2>
          <h2
            className="reveal-text text-transparent bg-clip-text bg-gradient-to-r from-light via-light to-muted/20"
            style={{ backgroundSize: "200% 100%" }}
          >
            WE BUILT A <span className="text-primary">SANCTUARY</span> FOR
          </h2>
          <h2
            className="reveal-text text-transparent bg-clip-text bg-gradient-to-r from-light via-light to-muted/20"
            style={{ backgroundSize: "200% 100%" }}
          >
            THOSE WHO RESPECT THE GRIND.
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8 font-inter text-muted text-sm md:text-base leading-relaxed max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Founded in 2011, PowerFit started with a simple philosophy:
            eliminate the fluff. No juice bars, no spa music, no distractions.
            Just calibrated plates, heavy dumbbells, and an atmosphere that
            demands your absolute best.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Whether you're a professional athlete stepping onto the platform, or
            a beginner touching a barbell for the first time, our doors are
            open. We provide the tools, the coaching, and the environment. You
            provide the effort.
          </motion.p>
        </div>
      </section>

      {/* --- MODERN FACILITIES GRID (Framer Motion Stagger) --- */}
      <section className="py-24 bg-surface border-t border-border px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-bebas text-5xl md:text-6xl text-light tracking-wide mb-4">
              THE <span className="text-primary">ARSENAL</span>
            </h2>
            <p className="font-inter text-muted text-sm max-w-xl mx-auto">
              Everything you need to sculpt a masterpiece. Nothing you don't.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                icon: Target,
                title: "Precision Gear",
                desc: "Competition-grade racks and calibrated plates.",
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
                title: "Recovery Area",
                desc: "Post-workout mobility tools and dedicated stretch zones.",
              },
              {
                icon: Flame,
                title: "Cardio Forge",
                desc: "Assault bikes, rowers, and self-powered treadmills.",
              },
              {
                icon: Dumbbell,
                title: "Free Weights",
                desc: "Dumbbells up to 100kg. No waiting around.",
              },
            ].map((facility, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-dark border border-border p-8 relative overflow-hidden group cursor-crosshair"
              >
                {/* Subtle Hover Glow Effect */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="w-14 h-14 bg-surface border border-border flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative z-10">
                  <facility.icon strokeWidth={1.5} size={24} />
                </div>

                <h3 className="font-bebas text-3xl text-light mb-3 tracking-wide relative z-10">
                  {facility.title}
                </h3>
                <p className="text-muted font-inter text-sm leading-relaxed relative z-10">
                  {facility.desc}
                </p>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-transparent group-hover:border-primary/40 transition-colors duration-500 m-4"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
