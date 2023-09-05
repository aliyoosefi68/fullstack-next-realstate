"use client";

import { useEffect, useState } from "react";
import styles from "@/templates/addProfile/AddProfile.module.css";
import TextInput from "@/modules/text-input/TextInput";
import RadioList from "@/modules/radioList/RadioList";
import TextList from "@/modules/textList/TextList";
import CustomDatePicker from "@/modules/customDatePicker/CustomDatePicker";
import { Toaster, toast } from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";
import { useRouter } from "next/navigation";

const AddProfile = ({ data }) => {
  const [ProfileData, setProfileData] = useState({
    title: "",
    desc: "",
    location: "",
    phone: "",
    price: "",
    realState: "",
    constroctionDate: new Date(),
    category: "",
    rules: [],
    aminities: [],
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (data) {
      setProfileData(data);
    }
  }, []);
  const router = useRouter();

  const submitHandler = async (e) => {
    setLoading(true);
    e.preventDefault();
    const res = await fetch("/api/profile", {
      method: "POST",
      body: JSON.stringify(ProfileData),
      headers: { "Content-Type": "appliction/json" },
    });
    const data = await res.json();
    setLoading(false);

    if (data.error) {
      toast.error(data.error);
    } else {
      console.log(data);
      toast.success(data.message);
      router.refresh();
    }
  };

  const editHandler = async () => {
    setLoading(true);
    const res = await fetch(`/api/profile`, {
      method: "PATCH",
      body: JSON.stringify(ProfileData),
      headers: { "Content-Type": "appliction/json" },
    });
    const data = await res.json();
    setLoading(false);

    if (data.error) {
      toast.error(data.error);
    } else {
      console.log(data);
      toast.success(data.message);
      router.refresh();
    }
  };
  return (
    <div className={styles.container}>
      <h3>{data ? "ویرایش آگهی" : "ایجاد آگهی"}:</h3>
      <TextInput
        title="عنوان آگهی"
        name="title"
        profileData={ProfileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="توضیحات"
        name="desc"
        profileData={ProfileData}
        setProfileData={setProfileData}
        textArea={true}
      />
      <TextInput
        title="شماره تماس"
        name="phone"
        profileData={ProfileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="قیمت(تومان)"
        name="price"
        profileData={ProfileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="بنگاه"
        name="realState"
        profileData={ProfileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="آدرس"
        name="location"
        profileData={ProfileData}
        setProfileData={setProfileData}
      />
      <RadioList ProfileData={ProfileData} setProfileData={setProfileData} />

      <TextList
        title="امکانات رفاهی"
        ProfileData={ProfileData}
        type="aminities"
        setProfileData={setProfileData}
      />
      <TextList
        title="قوانین"
        ProfileData={ProfileData}
        type="rules"
        setProfileData={setProfileData}
      />
      <CustomDatePicker
        ProfileData={ProfileData}
        setProfileData={setProfileData}
      />
      <Toaster />
      {loading ? (
        <ThreeDots
          color="#304ffe"
          ariaLabel="three-dots-loading"
          visible={true}
          wrapperStyle={{ margin: "auto" }}
          height={45}
        />
      ) : data ? (
        <button className={styles.submit} onClick={editHandler}>
          ویرایش آگهی
        </button>
      ) : (
        <button className={styles.submit} onClick={submitHandler}>
          ثبت آگهی
        </button>
      )}
    </div>
  );
};

export default AddProfile;
