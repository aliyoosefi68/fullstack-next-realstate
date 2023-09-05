import DashboardSidbar from "@/layout/DashboardSidbar";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import connectDB from "@/utils/connectDB";
import User from "@/models/User";

export const metadata = {
  title: "پنل کاربری املاک",
};

const DashboardLayout = async ({ children }) => {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/signin");

  await connectDB();
  const user = await User.findOne({ email: session.user.email });

  if (!user) return <h3>مشکلی پیش آمده است</h3>;

  console.log(user);

  return (
    <DashboardSidbar role={user.role} email={user.email}>
      {children}
    </DashboardSidbar>
  );
};

export default DashboardLayout;
