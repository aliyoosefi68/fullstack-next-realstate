import { RiHome3Line } from "react-icons/ri";
import { MdApartment } from "react-icons/md";
import { BiStore } from "react-icons/bi";
import { GiOfficeChair } from "react-icons/gi";

const icons = {
  villa: <RiHome3Line />,
  apartment: <MdApartment />,
  shop: <BiStore />,
  office: <GiOfficeChair />,
};

const categories = {
  apartment: "آپارتمان",
  villa: "ویلا",
  shop: "مغازه",
  office: "دفتر",
};

export { icons, categories };
