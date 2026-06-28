export const gymData = {
  gymName: "POWERFIT GYM",
  whatsappNumber: import.meta.env.VITE_GYM_WHATSAPP,
  email: import.meta.env.VITE_GYM_EMAIL,
  address: import.meta.env.VITE_GYM_ADDRESS,
  upiId: "6395901152@pthdfc",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.562064611221!2d77.22732107550005!3d28.6129120756749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2daa9eb4d0b%3A0x71797a133c1775f0!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
  
  plans: [
    {
      name: "BASIC ARSENAL",
      monthlyPrice: 1499,
      yearlyPrice: 14990,
      features: [
        "Access to gym floor",
        "Standard locker access",
        "1 Free fitness assessment",
        "No group classes",
      ],
      popular: false,
    },
    {
      name: "ELITE PACK",
      monthlyPrice: 2499,
      yearlyPrice: 23990,
      features: [
        "All Basic features",
        "Unlimited group classes",
        "Monthly body composition tracking",
        "Guest pass (2/month)",
      ],
      popular: true,
    },
    {
      name: "VIP IRON",
      monthlyPrice: 4499,
      yearlyPrice: 42990,
      features: [
        "All Elite features",
        "Personalized diet & nutrition chart",
        "2 Personal training sessions/month",
        "Unlimited guest passes",
      ],
      popular: false,
    },
  ],

  schedule: [
    {
      id: 1,
      name: "CrossFit WOD",
      trainer: "Alex Mercer",
      time: "06:00 AM",
      duration: 60,
      day: "Mon",
      type: "CrossFit",
    },
    {
      id: 2,
      name: "Heavy Lifting",
      trainer: "Sarah King",
      time: "08:00 AM",
      duration: 90,
      day: "Mon",
      type: "Strength",
    },
    {
      id: 3,
      name: "HIIT Burn",
      trainer: "Marcus Trent",
      time: "06:00 PM",
      duration: 45,
      day: "Mon",
      type: "HIIT",
    },
    {
      id: 4,
      name: "Yoga Flow",
      trainer: "Emma Ross",
      time: "07:00 AM",
      duration: 60,
      day: "Tue",
      type: "Yoga",
    },
    {
      id: 5,
      name: "Powerlifting Base",
      trainer: "Sarah King",
      time: "05:30 PM",
      duration: 90,
      day: "Tue",
      type: "Strength",
    },
    {
      id: 6,
      name: "Boxing Basics",
      trainer: "John Doe",
      time: "07:00 PM",
      duration: 60,
      day: "Wed",
      type: "Cardio",
    },
  ],

  trainers: [
    {
      name: "ALEX MERCER",
      specialty: "HEAD COACH / CROSSFIT",
      exp: "8 Years",
      image:
        "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=600&auto=format&fit=crop",
      bio: "Former marine specialized in breaking physical limits and building raw explosive power.",
    },
    {
      name: "SARAH KING",
      specialty: "POWERLIFTING CHAMPION",
      exp: "6 Years",
      image:
        "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=600&auto=format&fit=crop",
      bio: "National powerlifter focusing on flawless mechanical form and lifting heavy assets.",
    },
    {
      name: "MARCUS TRENT",
      specialty: "HIIT & CONDITIONING",
      exp: "5 Years",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop",
      bio: "High heart-rate specialist designing elite routines to burn body fat instantly.",
    },
  ],

  gallery: [
    {
      id: 1,
      category: "Equipment",
      url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 2,
      category: "Transformations",
      url: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 3,
      category: "Events",
      url: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 4,
      category: "Equipment",
      url: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 5,
      category: "Transformations",
      url: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 6,
      category: "Events",
      url: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=600&auto=format&fit=crop",
    },
  ],
};
