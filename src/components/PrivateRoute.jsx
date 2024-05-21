import PropTypes from "prop-types";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./layouts/Sidebar";
import Topbar from "./layouts/Topbar";

const PrivateRoute = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <Sidebar
        showSidebar={showSidebar}
        setShowSidebar={() => setShowSidebar(!showSidebar)}
      />

      <Topbar
        showSidebar={showSidebar}
        setShowSidebar={() => setShowSidebar(!showSidebar)}
      />

      {children}

      <Outlet />
    </>
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.any,
};

export default PrivateRoute;
