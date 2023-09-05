//style
import styles from "@/templates/detailesPage/DetailesPage.module.css";

//icons
import { SiHomebridge } from "react-icons/si";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiCalendarCheck } from "react-icons/bi";

import { icons, categories } from "src/constants/icons";
import Title from "@/modules/Title/Title";
import ItemList from "@/modules/itemList/ItemList";
import { e2p, sp } from "@/utils/replaceNumber";
import ShareButton from "@/modules/shareButton/ShareButton";

const DetailesPage = ({ data }) => {
  console.log(data.constructionDate);
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>{data.title}</h1>
        <span>
          <HiOutlineLocationMarker />
          {data.location}
        </span>
        <Title>توضیحات</Title>
        <p>{data.desc}</p>
        <Title>امکانات:</Title>
        <ItemList data={data.aminities} />

        <Title>قوانین:</Title>
        <ItemList data={data.rules} />
      </div>
      <div className={styles.sidebar}>
        <div className={styles.realState}>
          <SiHomebridge />
          <p>املاک {data.realState}</p>
          <span>
            <AiOutlinePhone />
            {e2p(data.phone)}
          </span>
        </div>
        <ShareButton />

        <div className={styles.price}>
          <p>
            {icons[data.category]}
            {categories[data.category]}
          </p>
          <p>{sp(data.price)} تومان</p>
          <p>
            <BiCalendarCheck />
            {new Date(data.constructionDate).toLocaleDateString("fa-IR")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailesPage;
