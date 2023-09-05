import styles from "@/templates/DashboardMain.module.css";

const DashboardMain = ({ createdAt }) => {
  return (
    <div className={styles.container}>
      <h3>سلام! خوش آمدید!</h3>
      <p>آگهی خود را ثبت کنید تا هزاران نفر آن را ببینند</p>
      <div className={styles.createdAt}>
        <p>
          تاریخ عضویت :
          <span>{new Date(createdAt).toLocaleDateString("fa-IR")}</span>
        </p>
      </div>
    </div>
  );
};

export default DashboardMain;
