"use client";
import styles from "@/modules/LogoutBtn.module.css";
import { signOut } from "next-auth/react";
import { FiLogOut } from "react-icons/fi";

const LogoutBtn = () => {
  return (
    <button className={styles.button} onClick={signOut}>
      <FiLogOut />
      خروج
    </button>
  );
};

export default LogoutBtn;
