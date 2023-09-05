import DashboardMain from "@/templates/DashboardMain";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import connectDB from "@/utils/connectDB";
import User from "@/models/User";

const DashboardPage = async () => {
  await connectDB();
  const session = await getServerSession(authOptions);
  const user = await User.findOne({ email: session.user.email });
  console.log(user);
  return (
    <div>
      <DashboardMain createdAt={user.createdAt} />
    </div>
  );
};

export default DashboardPage;
