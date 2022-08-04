import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import CURRENT_USER from "../queries/CurrentUser";
import { LOGOUT } from "../mutations";

const Header = () => {
  const query = useQuery(CURRENT_USER);
  const [mutate] = useMutation(LOGOUT);

  //   console.log("query", query);
  const onLogoutClick = () => {
    mutate({
      refetchQueries: [{ query: CURRENT_USER }],
    });
  };

  const renderButtons = () => {
    // const { user = {} } = query?.data;

    if (query?.data?.loading) {
      return <div />;
    }

    if (query?.data?.user) {
      return (
        <li>
          <div onClick={() => onLogoutClick()}>Logout</div>
        </li>
      );
    } else {
      return (
        <div>
          <li>
            <Link to="signup">Signup</Link>
          </li>
          <li>
            <Link to="login">Login</Link>
          </li>
        </div>
      );
    }
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo left">
          Home
        </Link>
        <ul className="right">{renderButtons()}</ul>
      </div>
    </nav>
  );
};

export default Header;
