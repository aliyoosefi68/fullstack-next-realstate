//icons
import { MdOutlineLibraryAdd } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";

//style
import styles from "./TextList.module.css";

const TextList = ({ title, ProfileData, setProfileData, type }) => {
  const addItemHandler = () => {
    setProfileData({ ...ProfileData, [type]: [...ProfileData[type], ""] });
  };

  const changeHandler = (e, index) => {
    const { value } = e.target;
    const list = [...ProfileData[type]];
    list[index] = value;
    setProfileData({ ...ProfileData, [type]: list });
  };

  const deletHandler = (index) => {
    const list = [...ProfileData[type]];
    list.splice(index, 1);
    setProfileData({ ...ProfileData, [type]: list });
  };
  return (
    <div className={styles.container}>
      <p>{title}</p>
      {ProfileData[type].map((item, index) => (
        <div key={index} className={styles.card}>
          <input
            type="text"
            onChange={(e) => changeHandler(e, index)}
            value={item}
          />
          <button onClick={() => deletHandler(index)}>
            حذف
            <AiOutlineDelete />
          </button>
        </div>
      ))}
      <button onClick={addItemHandler}>
        افزودن <MdOutlineLibraryAdd />
      </button>
    </div>
  );
};

export default TextList;
