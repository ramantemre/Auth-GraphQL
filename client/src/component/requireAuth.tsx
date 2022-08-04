import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import currentUserQuery from "../queries/CurrentUser";
import { useNavigate } from "react-router-dom";

const requireComponent = (WrappedComponent: React.ReactElement) => {
  const RequireAuth = () => {
    const query = useQuery(currentUserQuery);

    const navigate = useNavigate();

    useEffect(() => {
      //   if (!query?.data?.loading && !query?.data?.user) {
      //     navigate("/login");
      //   }
    }, [navigate, query?.data?.loading, query?.data?.user]);

    // componentWillUpdate(nextProps) {
    //   if (!nextProps.data.loading && !nextProps.data.user) {
    //     hashHistory.push('/login');
    //   }
    // }

    return WrappedComponent;
  };

  return RequireAuth();
};

export default requireComponent;
