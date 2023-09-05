import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

import SigninPage from "@/templates/SigninPage";

const SignIn = async () => {
  const session = await getServerSession(authOptions);
  if (session) redirect("/");
  return (
    <div>
      <SigninPage />
    </div>
  );
};

export default SignIn;
