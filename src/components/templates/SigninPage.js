"use client";

import { useState } from "react";
import Link from "next/link";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

//loader
import { ThreeDots } from "react-loader-spinner";

//styles
import styles from "./SigninPage.module.css";

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const signiHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    setIsLoading(false);
    if (res.error) {
      toast.error(`${res.error}`, {
        style: {
          color: "red",
          background: "#FFEBEE",
        },
      });
    } else {
      toast.success("ورود با موفقیت انجام شد!", {
        style: {
          color: "#388E3C",
          background: "#E8F5E9",
        },
      });
      setIsLoading(false);
      router.push("/");
    }
  };

  return (
    <div className={styles.form}>
      <h4>فرم ورود به حساب کاربری</h4>
      <form>
        <label>ایمیل : </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>رمز عبور : </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {!isLoading ? (
          <button type="submit" onClick={signiHandler}>
            ورود
          </button>
        ) : (
          <ThreeDots
            color="#304ffe"
            hheight="45"
            ariaLabel="three-dots-loading"
            visible={true}
            wrapperStyle={{ margin: "auto" }}
          />
        )}
      </form>
      <p>
        حساب کاربری ندارید؟
        <Link href="/signup">ثبت نام</Link>
      </p>

      <Toaster />
    </div>
  );
};

export default SigninPage;
