import DashboardCard from "@/modules/DashboardCard/DashboardCard";
import styles from "@/templates/MyProfilesPage/MyProfilePage.module.css";

const MyProfilePage = ({ profiles }) => {
  console.log(profiles);
  return (
    <div>
      {profiles.length ? null : (
        <p className={styles.text}>هیچ آگهی ثبت نشده است!</p>
      )}
      {profiles.map((profile) => (
        <DashboardCard
          key={profile._id}
          data={JSON.parse(JSON.stringify(profile))}
        />
      ))}
    </div>
  );
};

export default MyProfilePage;
