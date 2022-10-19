import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "reactstrap/lib/Button";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button color="primary" type="button" onClick={() => loginWithRedirect()}>
    Sign In or Sign Up
  </Button>;
};

export default LoginButton;