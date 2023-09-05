import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import User from "@/models/User";
import DashboardSidbar from "@/layout/DashboardSidbar";
import AdminPage from "@/templates/adminPage/AdminPage";
import Profile from "@/models/Profile";

export const metadata = {
  title: "پنل کاربری ادمین املاک",
};

const Admin = async () => {
  await connectDB();
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");

  const user = await User.findOne({ email: session.user.email });

  if (user.role !== "ADMIN") redirect("/dashboard");

  const profile = await Profile.find({ published: false });

  return (
    <DashboardSidbar role={user.role} email={user.email}>
      <AdminPage profile={profile} />
    </DashboardSidbar>
  );
};

export default Admin;
