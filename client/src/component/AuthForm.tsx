import React, { useState } from "react";

declare global {
  type UserType = {
    email: string;
    password: string;
  };
  type AuthFormType = {
    errors: Array<any>;
    onSubmit: (user: UserType) => void;
  };
}
const AuthForm = (props: AuthFormType) => {
  const [state, setState] = useState({ email: "", password: "" });

  const onSubmit = (event: any) => {
    event.preventDefault();

    props.onSubmit(state);
  };

  return (
    <div className="row">
      <form onSubmit={onSubmit} className="col s6">
        <div className="input-field">
          <input
            placeholder="Email"
            value={state.email}
            onChange={(e) => setState({ ...state, email: e.target.value })}
          />
        </div>
        <div className="input-field">
          <input
            placeholder="Password"
            type="password"
            value={state.password}
            onChange={(e) => setState({ ...state, password: e.target.value })}
          />
        </div>
        <div className="errors">
          {props.errors.map((error) => (
            <div key={error}>{error}</div>
          ))}
        </div>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default AuthForm;
