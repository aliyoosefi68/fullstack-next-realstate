import Profile from "@/models/Profile";
import AddProfile from "@/templates/addProfile/AddProfile";
import connectDB from "@/utils/connectDB";

const ProfileEdite = async ({ params: { profilId } }) => {
  await connectDB();
  const profile = await Profile.findOne({ _id: profilId });
  if (!profile) return <h3>مشکلی پیش آمده است لطفا دوباره امتحان کنید!</h3>;
  return <AddProfile data={JSON.parse(JSON.stringify(profile))} />;
};

export default ProfileEdite;
