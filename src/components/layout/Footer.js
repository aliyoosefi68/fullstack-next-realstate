import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.desc}>
        <h3>سامانه اجاره و خرید ملک</h3>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        </p>
      </div>
      <div>
        <ul>
          <li>تعرفه قانونی</li>
          <li>دسترسی سریع</li>
          <li>مشاورین خبره</li>
          <li>قولنامه رسمی</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
