"use client";

//styles
import styles from "@/modules/adminCard/AdminCard.module.css";
import { sp } from "@/utils/replaceNumber";
import { useRouter } from "next/navigation";

import { Toaster, toast } from "react-hot-toast";

const AdminCard = ({ data }) => {
  const router = useRouter();
  const publishedHandler = async () => {
    const res = await fetch(`/api/profile/publish/${data._id}`, {
      method: "PATCH",
    });
    const result = await res.json();

    console.log(result);
    if (result.message) {
      toast.success(result.message);
      router.refresh();
    }
  };
  return (
    <div className={styles.container}>
      <h3>{data.title}</h3>
      <p>{data.desc}</p>
      <div className={styles.properties}>
        <span>{data.location}</span>
        <span>{sp(data.price)}تومان</span>
      </div>
      <button onClick={publishedHandler}>انتشار آگهی</button>
      <Toaster />
    </div>
  );
};

export default AdminCard;
