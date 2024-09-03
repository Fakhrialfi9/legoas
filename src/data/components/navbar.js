import { User, Search, ShoppingBag } from "lucide-vue-next";

export const navbarCenter = [
  { name: "Home", to: "/", index: 0 },
  { name: "Mobil Bekas", to: "/about", index: 1 },
  { name: "Motor Bekas", to: "/about", index: 2 },
  { name: "Property", to: "/services", index: 3 },
  { name: "Handphone", to: "/contact", index: 4 },
  { name: "TV, Audio & Video", to: "/contact", index: 5 },
];

export const navbarRight = [
  { icon: User, to: "/user", index: 0 },
  { icon: Search, to: "/search", index: 1 },
  { icon: ShoppingBag, to: "/shop", index: 2 },
];
