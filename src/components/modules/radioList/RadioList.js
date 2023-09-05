import styles from "@/modules/radioList/RadioList.module.css";

const RadioList = ({ ProfileData, setProfileData }) => {
  const { category } = ProfileData;
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...ProfileData, [name]: value });
  };
  return (
    <div className={styles.container}>
      <p>دسته بندی</p>
      <div className={styles.main}>
        <div>
          <label htmlFor="villa">ویلا</label>
          <input
            type="radio"
            id="villa"
            name="category"
            value="villa"
            checked={category === "villa"}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="apartment">آپارتمان</label>
          <input
            type="radio"
            id="apartment"
            name="category"
            value="apartment"
            checked={category === "apartment"}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="store">مغازه</label>
          <input
            type="radio"
            id="shop"
            name="category"
            value="shop"
            checked={category === "shop"}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="office">دفتر</label>
          <input
            type="radio"
            id="office"
            name="category"
            value="office"
            checked={category === "office"}
            onChange={changeHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default RadioList;
