import React from "react";

import AuthContainer from "../../shared/AuthContainer";
import BasicTextField from "../../shared/BasicTextField";
import BasicButton from "../../shared/BasicButton";

const Signup = () => {
  return (
    <AuthContainer title={"Signup"}>
      <BasicTextField label={"Email"} type={"text"} />
      <BasicTextField label={"Password"} type={"password"} />
      <BasicButton text={"Signup"} />
    </AuthContainer>
  );
};
export default Signup;
