import Profile from "@/models/Profile";
import DetailesPage from "@/templates/detailesPage/DetailesPage";
import connectDB from "@/utils/connectDB";

const ProfileId = async ({ params: { profileId } }) => {
  await connectDB();
  const profile = await Profile.findOne({ _id: profileId });

  if (!profile) return <h3>مشکلی پیش آمده است</h3>;
  return <DetailesPage data={profile} />;
};

export default ProfileId;

export const generateMetadata = async ({ params: { profileId } }) => {
  await connectDB();
  const profile = await Profile.findOne({ _id: profileId });
  return {
    title: profile.title,
    description: profile.desc,
  };
};
