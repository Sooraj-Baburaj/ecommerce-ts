import React from "react";

import { getSession } from "@/app/(auth)/actions/auth";
import LoginButton, { LoginButtonPropTypes } from "./LoginButton";

const Login = async ({ ...props }: Partial<LoginButtonPropTypes>) => {
  const user = await getSession();

  return <LoginButton {...props} user={user} />;
};

export default Login;
