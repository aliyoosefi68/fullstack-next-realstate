//styles
import styles from "@/modules/sidebar/SideBar.module.css";
import Link from "next/link";

//icon
import { HiFilter } from "react-icons/hi";

const SideBar = () => {
  return (
    <div className={styles.container}>
      <p>
        <HiFilter />
        دسته بندی
      </p>
      <Link href="/buy-residential">همه آگهی ها</Link>
      <Link href="/buy-residential?category=villa">ویلاها</Link>
      <Link
        href={{ pathname: "/buy-residential", query: { category: "shop" } }}
      >
        مغازه
      </Link>
      <Link
        href={{
          pathname: "/buy-residential",
          query: { category: "apartment" },
        }}
      >
        آپارتمان
      </Link>
      <Link
        href={{
          pathname: "/buy-residential",
          query: { category: "office" },
        }}
      >
        دفتر
      </Link>
    </div>
  );
};

export default SideBar;
