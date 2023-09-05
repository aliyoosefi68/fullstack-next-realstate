import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import User from "@/models/User";
import MyProfilePage from "@/templates/MyProfilesPage/MyProfilePage";
import connectDB from "@/utils/connectDB";

import { getServerSession } from "next-auth";

const Myprofile = async () => {
  await connectDB();
  const session = await getServerSession(authOptions);
  const [user] = await User.aggregate([
    { $match: { email: session.user.email } },
    {
      $lookup: {
        from: "profiles",
        foreignField: "userId",
        localField: "_id",
        as: "profiles",
      },
    },
  ]);

  console.log(user.profiles);

  return <MyProfilePage profiles={user.profiles} />;
};

export default Myprofile;
