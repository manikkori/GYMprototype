# 🏋️‍♂️ PowerFit Gym - Premium Frontend Experience

A high-performance, ultra-responsive, frontend-only gym website built with **React (Vite)**. Designed for elite fitness centers to maximize conversions through direct WhatsApp integration and zero-backend email forms.

![PowerFit Gym Preview](https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop)

## ✨ Key Features
*   **Aggressive Dark Theme:** Premium, high-contrast UI tailored for modern fitness brands.
*   **Mobile-First Design:** 100% optimized for mobile screens where 90% of gym traffic originates.
*   **GSAP & Framer Motion:** Buttery smooth scroll animations, parallax effects, and infinite marquees.
*   **Zero Backend Required:** 
    *   **Direct WhatsApp CTAs:** Turns visitors into leads instantly.
    *   **Web3Forms Integration:** Fully functional contact form that sends emails directly to your inbox without a Node.js server.
*   **Single Source of Truth:** All website data (trainers, plans, gallery, schedule) is centralized in one `gymData.js` file for effortless updates.

## 🚀 Tech Stack
*   **Framework:** React.js (via Vite for blazing-fast builds)
*   **Styling:** Tailwind CSS
*   **Animations:** GSAP (ScrollTrigger) & Framer Motion
*   **Icons:** Lucide React & React Icons
*   **Routing:** React Router DOM
*   **Form Handling:** Web3Forms API

## 📁 Folder Structure
```text
powerfit-gym/
├── public/
├── src/
│   ├── components/       # Reusable UI (Navbar, Footer, ScrollToTop)
│   ├── pages/            # Main Views (Home, About, Plans, Schedule, etc.)
│   ├── data/
│   │   └── gymData.js    # ⚙️ MASTER DATA FILE (Edit site content here)
│   ├── App.jsx           # Routing Logic
│   ├── main.jsx          # Entry Point
│   └── index.css         # Global Styles & Theme Configuration
├── .env                  # API Keys & Contact Info
├── tailwind.config.js    # Theme settings (Colors, Fonts)
└── package.json
