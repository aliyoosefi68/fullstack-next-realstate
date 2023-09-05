//styles
import Card from "@/modules/Card/Card";
import SideBar from "@/modules/sidebar/SideBar";
import styles from "@/templates/BuyResidentialPage/BuyResidentialPage.module.css";

const BuyResidentialPage = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <SideBar />
      </div>
      <div className={styles.main}>
        {data.length ? null : (
          <p className={styles.text}>هیچ آگهی ثبت نشده است</p>
        )}
        {data.map((item) => (
          <Card key={item._id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default BuyResidentialPage;
