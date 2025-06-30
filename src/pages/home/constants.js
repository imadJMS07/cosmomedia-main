export const HERO_CONTENT = {
  title: "World's No.1",
  subtitle: "Corporate Agency",
  description:
    "With every single one of our clients, we bring forth a deep passion for creative problem solving — which is what we deliver.",
};

export const TEAM_IMAGES = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=80",
    alt: "Team collaboration",
    size: { width: 280, height: 280 },
    delay: 0,
    className: "animate-float top-[2rem] left-0 md:left-[5rem]",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=80",
    alt: "Business meeting",
    size: { width: 240, height: 240 },
    delay: 0.2,
    className: "animate-float-delay-1 top-[0rem] md:left-[20rem] left-36",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=80",
    alt: "Office work",
    size: { width: 320, height: 320 },
    delay: 0.6,
    className: "animate-float-delay-3 bottom-[10rem] md:left-[2rem]",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=80",
    alt: "Team discussion",
    size: { width: 260, height: 260 },
    delay: 0.4,
    className: "animate-float-delay-2 top-[12rem] md:left-[15rem] left-36",
  },
];

export const NAVIGATION_BUTTONS = [
  {
    id: 1,
    text: "View Services",
    to: "/services",
    className: "bg-[#1E293B] hover:bg-[#334155]",
  },
  {
    id: 2,
    text: "Make A Reservation",
    to: "/contact",
    className: "bg-[#4F46E5] hover:bg-[#4338CA]",
  },
];
