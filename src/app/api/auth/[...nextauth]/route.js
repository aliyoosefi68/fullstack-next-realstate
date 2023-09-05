import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import { verifyPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const { email, password } = credentials;
        try {
          await connectDB();
        } catch (error) {
          throw new Error("مشکلی در اتصال به دیتابیس وجود دارد!");
        }
        if (!email || !password) {
          throw new Error("لطفا اطلاعات معتبر وارد کنید!");
        }

        const user = await User.findOne({ email });

        if (!user) {
          throw new Error("کاربری با این ایمل نام نویسی نکرده!");
        }

        const isValid = await verifyPassword(password, user.password);

        if (!isValid) {
          throw new Error("ایمیل یا رمز شما اشتباه است!");
        }

        return { email };
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
