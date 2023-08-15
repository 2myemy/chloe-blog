import { Outlet, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import React from "react";
import { useSelector } from "react-redux";
import "./Layout.css";

const Layout = () => {
  const onClickHome = () => {
    window.location.href = process.env.PUBLIC_URL + "/";
  };

  return (
    <div>
      <header className="header">
        <IconButton onClick={onClickHome}>
          <HomeIcon />
        </IconButton>
        <ul className="navContainer">
          {/* <li className="navtitle">
            <NavLink to="/about">About Chloe</NavLink>
          </li> */}
          {/* <li className="navtitle">
            <NavLink to="/posts">Posts</NavLink>
          </li> */}
          <li className="navtitle">
            <NavLink to="/portfolio">Portfolio</NavLink>
          </li>
          {/* {user.id !== "" ? (
            <li className="navtitle">
              <a href="/" onClick={onClickSignOut}>Sign-Out</a>
            </li>
          ) : (
            <li className="navtitle">
              <NavLink to="/signin">Sign-In</NavLink>
            </li>
          )} */}
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
