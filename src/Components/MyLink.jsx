import React from "react";
import { NavLink } from "react-router";

const MyLink = ({ to, classname, children }) => {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? "text-purple-500" : `${classname} font-semibold`)}
      >
        {children}
      </NavLink>
    </div>
  );
};

export default MyLink;
