import TempuraSet from "../assets/TempuraSet.jpg";
import RamenBowl from "../assets/RamenBowl.jpg";
import Sushi from "../assets/Sushi.jpeg";

const sampleMenu = [
  {
    id: 1,
    name: "Sushi Platter",
    description: "Fresh assorted sushi with soy sauce",
    price: 1200,
    image: Sushi,
    category: "sushi",
  },
  {
    id: 2,
    name: "Ramen Bowl",
    description: "Spicy miso ramen with pork and egg",
    price: 850,
    image: RamenBowl,
    category: "Japanese",
  },
  {
    id: 3,
    name: "Tempura Set",
    description: "Crispy shrimp & vegetable tempura",
    price: 950,
    image: TempuraSet,
    category: "Japanese",
  },
]; 

export default sampleMenu;
