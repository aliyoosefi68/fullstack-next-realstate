//styles
import styles from "./CustomDatePicker.module.css";

//Date Picker
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const CustomDatePicker = ({ setProfileData, ProfileData }) => {
  const chageHandler = (e) => {
    const date = new Date(e);
    setProfileData({ ...ProfileData, constructionDate: date });
  };
  return (
    <div className={styles.container}>
      <p>تاریخ ساخت بنا</p>
      <DatePicker
        calendar={persian}
        locale={persian_fa}
        value={ProfileData.constructionDate}
        onChange={chageHandler}
      />
    </div>
  );
};

export default CustomDatePicker;
