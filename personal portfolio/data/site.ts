export const siteConfig = {
  name: "Matt Ryan Pickleball Coaching",
  tagline: "Elevate Your Game with Private Pickleball Coaching",
  description:
    "Private pickleball coaching for beginners through competitive players. Personalized lessons, strategy, and confidence on the court.",
  url: "https://mattryanpickleball.com",
  email: "hello@mattryanpickleball.com",
  phone: "(555) 234-8890",
  location: "Greater Metro Area — courts by arrangement",
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    youtube: "https://youtube.com/",
  },
  bookingUrl: "/contact",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/coaching", label: "Coaching" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;
