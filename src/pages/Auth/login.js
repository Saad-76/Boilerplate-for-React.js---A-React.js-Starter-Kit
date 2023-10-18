import React from "react";

import AuthContainer from "../../shared/AuthContainer";
import BasicTextField from "../../shared/BasicTextField";
import BasicButton from "../../shared/BasicButton";
import { useNavigate } from "react-router-dom";
import { saveToPersistance } from "../../utils/utils";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/Home");
    saveToPersistance("auth_token", "true");
  };

  return (
    <AuthContainer title={"Login"}>
      <BasicTextField label={"Email"} type={"text"} />
      <BasicTextField label={"Password"} type={"password"} />
      <BasicButton text={"Login"} onClick={handleLogin} />
    </AuthContainer>
  );
};
export default Login;
