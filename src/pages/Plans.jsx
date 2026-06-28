import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { gymData } from "../data/gymData";

const Plans = () => {
  const [isYearly, setIsYearly] = useState(false);

  // Yeh function Payment aur WhatsApp redirection Handle Karega
  const handlePayment = (planName, price) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    //mobile
    if (isMobile) {
      const upiLink = `upi://pay?pa=${gymData.upiId}&pn=${encodeURIComponent(gymData.gymName)}&am=${price}&cu=INR&tn=${encodeURIComponent(`Payment for ${planName} Plan`)}`;
      window.location.href = upiLink;
    } else {
      //for laptop
      const waMsg = `Hi! I want to purchase the *${planName} Plan* for ₹${price}. Please share the Scanner/QR Code.`;
      window.open(
        `https://wa.me/${gymData.whatsappNumber}?text=${encodeURIComponent(waMsg)}`,
        "_blank",
      );
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-dark">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-bebas text-6xl md:text-7xl text-light mb-6 tracking-wide">
            CHOOSE YOUR <span className="text-primary">Plan!</span>
          </h1>

          <div className="flex items-center justify-center gap-4 mt-8">
            <span
              className={`font-bebas text-xl ${!isYearly ? "text-light" : "text-muted"}`}
            >
              MONTHLY
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="w-16 h-8 bg-surface2 rounded-full p-1 relative border border-border flex items-center"
            >
              <motion.div
                layout
                className="w-6 h-6 bg-primary rounded-full"
                animate={{ x: isYearly ? 32 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <span
              className={`font-bebas text-xl ${isYearly ? "text-light" : "text-muted"}`}
            >
              YEARLY <span className="text-primary text-sm">(SAVE 20%)</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
          {gymData.plans.map((plan, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className={`relative bg-surface p-8 border ${plan.popular ? "border-primary" : "border-border"} flex flex-col h-full`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-light font-bebas tracking-widest px-4 py-1 text-sm">
                  MOST POPULAR
                </div>
              )}

              <h3 className="font-bebas text-4xl text-light mb-2 tracking-wide">
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-2 mb-8 border-b border-border pb-8">
                <span className="font-bebas text-5xl text-light">
                  ₹{isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span className="text-muted font-inter text-sm">
                  /{isYearly ? "yr" : "mo"}
                </span>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-muted">
                    <Check className="text-primary w-5 h-5 flex-shrink-0" />
                    <span className="font-inter text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* PAYMENT BUTTON (Replaced simple <a> tag) */}
              <button
                onClick={() =>
                  handlePayment(
                    plan.name,
                    isYearly ? plan.yearlyPrice : plan.monthlyPrice,
                  )
                }
                className={`w-full py-4 font-bebas text-xl tracking-wider text-center transition-colors ${
                  plan.popular
                    ? "bg-primary text-light hover:bg-primary/80"
                    : "bg-surface2 text-light hover:bg-surface border border-border"
                }`}
              >
                SELECT PLAN & PAY
              </button>
              <p className="text-center font-inter text-[10px] text-muted mt-3 uppercase tracking-widest">
                Secure Zero-Fee UPI Transaction
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plans;
