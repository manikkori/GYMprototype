import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ChevronRight,
  Dumbbell,
  Users,
  Trophy,
  Timer,
  CheckCircle2,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { gymData } from "../data/gymData";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  // Yahan containerRef lagaya hai taaki GSAP poore page ke elements ko dhoondh sake
  const containerRef = useRef(null);
  const whatsappLink = `https://wa.me/${gymData.whatsappNumber}?text=Hi!%20I%20want%20to%20join%20PowerFit.`;

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Hero Entrance
      const tl = gsap.timeline();
      tl.fromTo(
        ".hero-badge",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 0.2 },
      )
        .fromTo(
          ".hero-title",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" },
          "-=0.4",
        )
        .fromTo(
          ".hero-p",
          { opacity: 0 },
          { opacity: 1, duration: 0.8 },
          "-=0.4",
        )
        .fromTo(
          ".hero-btn",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
          "-=0.4",
        );

      // Smooth Marquee Animation 
      gsap.to(".marquee-content", {
        xPercent: -120,
        repeat: -1,
        duration: 20,
        ease: "none",
      });
    }, containerRef); // Yahan scope update kar diya
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-dark min-h-screen">
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-dark/40 z-10"></div>
          {/* High-Quality Image Background */}
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop"
            alt="Gym Workout"
            className="w-full h-full object-cover object-top scale-105"
          />
        </div>

        <div className="relative z-20 text-center px-4 w-full max-w-5xl mx-auto mt-16">
          <motion.div className="hero-badge inline-block bg-primary text-light font-bebas text-sm md:text-base tracking-widest px-4 py-1.5 mb-6">
            ESTABLISHED 2011
          </motion.div>

          <h1 className="hero-title font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-light tracking-wider leading-[0.9] mb-6">
            SCULPT YOUR <br className="sm:hidden" />{" "}
            <span className="text-primary">LEGACY</span>
          </h1>

          <p className="hero-p font-inter text-muted text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed">
            The most elite training facility in the city. No excuses. Just pure
            iron, expert coaching, and raw results.
          </p>

          <div className="hero-btn flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-primary text-light px-8 py-3.5 font-bebas text-xl tracking-wide flex items-center justify-center gap-3 hover:bg-light hover:text-dark transition-all duration-300"
            >
              <FaWhatsapp size={20} /> START GRINDING
            </a>
            <Link
              to="/plans"
              className="w-full sm:w-auto bg-dark/60 backdrop-blur-md text-light px-8 py-3.5 font-bebas text-xl tracking-wide border border-border hover:border-light hover:bg-light/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              EXPLORE PLANS <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* --- SCROLLING MARQUEE --- */}
      <div className="bg-primary overflow-hidden py-3 border-y border-dark relative z-20 shadow-xl">
        <div className="marquee-content flex whitespace-nowrap gap-8">
          {[...Array(12)].map((_, i) => (
            <span
              key={i}
              className="font-bebas text-2xl md:text-3xl text-dark tracking-wide"
            >
              PURE IRON • NO EGO • ELITE COACHING •
            </span>
          ))}
        </div>
      </div>

      {/* --- QUICK STATS --- */}
      <section className="py-16 bg-surface">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-4 max-w-7xl mx-auto">
          {[
            { icon: Users, stat: "5000+", label: "Active Members" },
            { icon: Trophy, stat: "15+", label: "Years Experience" },
            { icon: Dumbbell, stat: "45", label: "Elite Trainers" },
            { icon: Timer, stat: "24/7", label: "Facility Access" },
          ].map((item, i) => (
            <div key={i} className="text-center group">
              <item.icon
                className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300"
                strokeWidth={1.5}
              />
              <h3 className="font-bebas text-4xl text-light tracking-wider mb-1">
                {item.stat}
              </h3>
              <p className="font-inter text-[11px] text-muted uppercase tracking-widest font-semibold">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- WHY CHOOSE US --- */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-bebas text-5xl md:text-6xl text-light">
            THE <span className="text-primary">DIFFERENCE</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "PRO EQUIPMENT",
              desc: "Top-tier Hammer Strength and Rogue Fitness gear calibrated for perfection.",
            },
            {
              title: "EXPERT COACHING",
              desc: "Our trainers don't just count reps; they correct biomechanics and drive progress.",
            },
            {
              title: "RAW VIBE",
              desc: "No spa music or fancy lounges. Just heavy metal, chalk, and serious lifters.",
            },
          ].map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-surface2 p-6 md:p-8 border border-border hover:border-primary/50 transition-colors"
            >
              <CheckCircle2
                className="text-primary w-10 h-10 mb-4"
                strokeWidth={1.5}
              />
              <h3 className="font-bebas text-2xl text-light mb-2 tracking-wide">
                {feat.title}
              </h3>
              <p className="text-muted font-inter text-sm leading-relaxed">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FLOATING WHATSAPP */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-transform"
      >
        <FaWhatsapp size={28} />
      </a>
    </div>
  );
};

export default Home;
