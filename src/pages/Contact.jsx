import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { gymData } from "../data/gymData";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setStatus("Message Sent!");
        e.target.reset();
      } else {
        setStatus("Error! Try WhatsApp.");
      }
    } catch (error) {
      setStatus("Network Error.");
    }
  };

  const whatsappLink = `https://wa.me/${gymData.whatsappNumber}`;

  return (
    <div className="pt-28 pb-20 min-h-screen bg-dark px-4">
      <div className="max-w-6xl mx-auto">
        {/* Adjusted Header Size */}
        <div className="text-center mb-12">
          <h1 className="font-bebas text-5xl md:text-6xl text-light mb-4 tracking-wide">
            COMMAND <span className="text-primary">CENTER</span>
          </h1>
          <p className="font-inter text-muted text-sm md:text-base max-w-xl mx-auto">
            Drop by the facility, give us a call, or shoot a message. Your
            transformation starts with a single step.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Left Column: Contact Details */}
          <div className="bg-surface2 p-6 md:p-8 border border-border flex flex-col justify-between">
            <div>
              <h3 className="font-bebas text-3xl text-light tracking-wide mb-6">
                CONTACT INFO
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-surface flex items-center justify-center border border-border flex-shrink-0">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-light font-bebas tracking-wide text-lg mb-0.5">
                      LOCATION
                    </p>
                    <p className="text-muted text-sm font-inter">
                      {gymData.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-surface flex items-center justify-center border border-border flex-shrink-0">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-light font-bebas tracking-wide text-lg mb-0.5">
                      PHONE / WHATSAPP
                    </p>
                    <p className="text-muted text-sm font-inter">
                      +{gymData.whatsappNumber}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-surface flex items-center justify-center border border-border flex-shrink-0">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-light font-bebas tracking-wide text-lg mb-0.5">
                      EMAIL ADDRESS
                    </p>
                    <p className="text-muted text-sm font-inter">
                      {gymData.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-8 bg-[#25D366] text-white font-bebas text-xl tracking-wide py-3 flex items-center justify-center gap-2 hover:bg-[#20b858] hover:shadow-[0_0_15px_rgba(37,211,102,0.4)] transition-all"
            >
              <FaWhatsapp size={20} /> CHAT ON WHATSAPP
            </a>
          </div>

          {/* Right Column: Clean, Normal-Sized Form */}
          <div className="bg-surface p-6 md:p-8 border border-border">
            <h3 className="font-bebas text-3xl text-light mb-6 tracking-wide">
              SEND A MESSAGE
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5 font-inter">
              <div>
                <label className="block text-muted text-xs uppercase tracking-widest font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-dark border border-border p-3 text-light text-sm focus:border-primary outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-muted text-xs uppercase tracking-widest font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-dark border border-border p-3 text-light text-sm focus:border-primary outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-muted text-xs uppercase tracking-widest font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full bg-dark border border-border p-3 text-light text-sm focus:border-primary outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-muted text-xs uppercase tracking-widest font-semibold mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  className="w-full bg-dark border border-border p-3 text-light text-sm focus:border-primary outline-none resize-none transition-colors"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-light font-bebas text-xl tracking-wider py-3 mt-2 hover:bg-light hover:text-dark transition-all flex items-center justify-center gap-2"
              >
                {status || "SEND MESSAGE"} <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Full-width Map Section */}
        <div className="w-full h-[350px] bg-surface2 border border-border relative overflow-hidden group">
          <iframe
            src={gymData.mapEmbedUrl}
            className="absolute inset-0 w-full h-full border-0 grayscale invert-[0.9] hue-rotate-180 opacity-70 group-hover:opacity-100 transition-opacity duration-500"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
