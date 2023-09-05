"use client";

import { useState } from "react";
import styles from "./SignupPage.module.css";
import Link from "next/link";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

//loader

import { ThreeDots } from "react-loader-spinner";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const signUpHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (password !== rePassword) {
      toast.error("مقادیر پسورد و تکرار پسورد برابر نیست!", {
        style: {
          color: "red",
          background: "#FFEBEE",
        },
      });

      setIsLoading(false);
      return;
    }
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(res.status);
    if (res.status === 200) {
      toast.success("ثبت نام با موفقیت انجام شد!", {
        style: {
          color: "#388E3C",
          background: "#E8F5E9",
        },
      });

      setIsLoading(false);
      router.push("/signin");
    } else {
      toast.error(`${data.msg}`, {
        style: {
          color: "red",
          background: "#FFEBEE",
        },
      });

      setIsLoading(false);
    }
  };

  return (
    <div className={styles.form}>
      <h4>فرم ثبت نام</h4>
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
        <label>تکرار رمز عبور : </label>
        <input
          type="password"
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}
        />
        {!isLoading ? (
          <button type="submit" onClick={signUpHandler}>
            ثبت نام
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
        حساب کاربری دارید؟
        <Link href="/signin">ورود</Link>
      </p>

      <Toaster />
    </div>
  );
};

export default SignupPage;
