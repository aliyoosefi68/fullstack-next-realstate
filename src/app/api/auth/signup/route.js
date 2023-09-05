import { NextResponse } from "next/server";
import connectDB from "@/utils/connectDB";
import User from "@/models/User";
import { hashPassword } from "@/utils/auth";

export async function POST(req) {
  try {
    await connectDB();
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json(
        { error: "لطفا اطلاعات معتبر وارد کنید" },
        { status: 422 }
      );
    }
    const existUser = await User.findOne({ email });

    if (existUser) {
      return NextResponse.json(
        { msg: "این حساب کاربری از قبل وجود دارد" },
        { status: 422 }
      );
    }
    const hashedPassword = await hashPassword(password);
    const newUser = await User.create({ email, password: hashedPassword });

    console.log(newUser);

    return NextResponse.json({ msg: "کاربر جدید ساخته شد" }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است!" },
      { status: 500 }
    );
  }
}
