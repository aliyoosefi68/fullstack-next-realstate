import styles from "@/templates/homePage/HomePage.module.css";

//icones
import { FiCircle } from "react-icons/fi";
import { FaCity } from "react-icons/fa";
import CategoryCard from "@/modules/categoryCard/CategoryCard";
import { cities, services } from "src/constants/Strings";

const HomePage = () => {
  return (
    <div>
      <div className={styles.banner}>
        <div className={styles.desc}>
          <h1>سامانه خرید و اجاره املاک</h1>
          <ul>
            {services.map((service) => (
              <li key={service}>
                <FiCircle />
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.categories}>
        <CategoryCard title="خانه ویلایی" name="villa" />
        <CategoryCard title="خانه آپارتمانی" name="apartment" />
        <CategoryCard title="مغازه" name="shop" />
        <CategoryCard title="دفتر" name="office" />
      </div>
      <div className={styles.city}>
        <h3>شهرهای پربازدید</h3>
        <ul>
          {cities.map((city) => (
            <li key={city}>
              <FaCity />
              <span>{city}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
