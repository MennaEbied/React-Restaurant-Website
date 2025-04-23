import Salmon from "../assets/salmon.png";
import crab from "../assets/crab.png";
import shrimp from "../assets/shrimp.png";
import temaki from "../assets/salmonTemaki.png";
import salmonMaki from "../assets/salmonFutomaki.png";
import tobiko from "../assets/tobiko.png";
import onigiri from "../assets/onigiri.png";
import cali from "../assets/californiaRoll.png";
import egg from "../assets/Egg.png";
import chirashi from "../assets/chirashi.png";
interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image_url: string;
}

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Salmon Nigiri",
    description: "Fresh salmon on a bed of seasoned rice",
    price: 6.99,
    category: "Nigiri",
    image_url: Salmon,
  },
  {
    id: 2,
    name: "Crab Nigiri",
    description: "Fresh Crab on a bed of seasoned rice",
    price: 6.99,
    category: "Nigiri",
    image_url: crab,
  },
  {
    id: 3,
    name: "Shrimp Nigiri",
    description: "Fresh Shrimp on a bed of seasoned rice",
    price: 7.99,
    category: "Nigiri",
    image_url: shrimp,
  },

  {
    id: 4,
    name: "Salmon Maki",
    description: "Salmon rolled in rice and wrapped in seaweed",
    price: 6.99,
    category: "Maki",
    image_url: salmonMaki,
  },
  {
    id: 5,
    name: "Tobiko Maki",
    description: "Caviar seasoned rice and wrapped in seaweed",
    price: 12.99,
    category: "Maki",
    image_url: tobiko,
  },
  {
    id: 6,
    name: "Onigiri",
    description: "Rice balls with salmon and avocado",
    price: 5.99,
    category: "New",
    image_url: onigiri,
  },
  {
    id: 7,
    name: "California Rolls",
    description: "Crab and avocado rolled in rice",
    price: 25,
    category: "New",
    image_url: cali,
  },
  {
    id: 8,
    name: "Salmon Temaki",
    description: "Sesame cone filled with rice and salmon",
    price: 10.5,
    category: "New",
    image_url: temaki,
  },
  {
    id: 9,
    name: "Egg Chirashi",
    description: "Raw fish topped on rice with rolled egg",
    price: 18,
    category: "Chirashi",
    image_url: egg,
  },
  {
    id: 10,
    name: "Salmon Chirashi",
    description: "Raw salmon topped on rice",
    price: 20,
    category: "Chirashi",
    image_url: chirashi,
  },
];
