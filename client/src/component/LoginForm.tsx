import React, { useState, useEffect } from "react";
import AuthForm from "./AuthForm";
import { useMutation, useQuery } from "@apollo/client";
import { LOGIN } from "../mutations";
import CURRENT_USER from "../queries/CurrentUser";
import { useNavigate } from "react-router-dom";

declare global {
  type LoginFormType = {};
}

const LoginForm = () => {
  const navigate = useNavigate();

  const [state, setState] = useState({ errors: [] });

  const query = useQuery(CURRENT_USER);
  const [mutate] = useMutation(LOGIN);

  //   useEffect(() => {
  //     if (!query?.data?.user) {
  //       navigate("/dashboard");
  //     }
  //   }, [query?.data?.user, navigate]);

  const onSubmit = ({ email, password }: any) => {
    mutate({
      variables: { email, password },
      refetchQueries: [{ query: CURRENT_USER }],
    }).catch((res) => {
      const errors = res.graphQLErrors.map((error: any) => error.message);
      setState({ ...state, errors });
    });
  };

  return (
    <div>
      <h3>Login</h3>
      <AuthForm errors={state.errors} onSubmit={onSubmit} />
    </div>
  );
};

export default LoginForm;
