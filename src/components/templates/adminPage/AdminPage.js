//styles
import AdminCard from "@/modules/adminCard/AdminCard";
import styles from "@/templates/adminPage/AdminPage.module.css";

const AdminPage = ({ profile }) => {
  return (
    <div>
      {profile.length ? null : (
        <p className={styles.text}>هیچ آگهی جدیدی ثبت نشده است</p>
      )}
      {profile.map((item) => (
        <AdminCard key={item._id} data={JSON.parse(JSON.stringify(item))} />
      ))}
    </div>
  );
};

export default AdminPage;
