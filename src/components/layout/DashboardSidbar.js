import styles from "./DashboardSidbar.module.css";

//icons
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import LogoutBtn from "@/modules/LogoutBtn";

const DashboardSidbar = async ({ children, role, email }) => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <CgProfile />
        {role === "ADMIN" ? <p>مدیر سایت</p> : null}
        <p>{email}</p>
        <span></span>
        <Link href="/dashboard">حساب کاربری</Link>
        <Link href="/dashboard/my-profiles">آگهی های من</Link>
        <Link href="/dashboard/add">ثبت آگهی</Link>
        {role === "ADMIN" ? <Link href="/admin">در انتظار تایید</Link> : null}
        <LogoutBtn />
      </div>
      <div className={styles.main}>{children}</div>
    </div>
  );
};

export default DashboardSidbar;
