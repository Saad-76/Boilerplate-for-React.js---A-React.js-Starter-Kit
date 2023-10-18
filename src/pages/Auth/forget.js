import React from "react";

import AuthContainer from "../../shared/AuthContainer";
import BasicTextField from "../../shared/BasicTextField";
import BasicButton from "../../shared/BasicButton";

const Forget = () => {
  return (
    <AuthContainer title={"Forget"}>
      <BasicTextField label={"Email"} type={"text"} />
      <BasicButton text={"Forget"} />
    </AuthContainer>
  );
};
export default Forget;
