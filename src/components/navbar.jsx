import React, { useState } from "react";
import { Link } from "react-router-dom";
import icon from "../assets/shared/logo.svg";
import closeIcon from "../assets/shared/icon-close.svg";
import openIcon from "../assets/shared/icon-hamburger.svg";

const navbar = ({ currentRoute }) => {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <header>
      <div
        className="navbar-outside"
        style={isShowing ? { display: "block" } : { display: "none" }}
        onClick={() => setIsShowing(!isShowing)}
      ></div>
      <div className="logo">
        <img alt="logo" src={icon} />
        <hr />
      </div>
      <button
        className="bars-navbar"
        style={isShowing ? { display: "none" } : { display: "flex" }}
      >
        <img
          src={openIcon}
          alt="menu icon"
          onClick={() => {
            setIsShowing(!isShowing);
          }}
        />
      </button>
      <ul
        className="navbar"
        style={isShowing ? { right: "0px" } : { right: "-50vh" }}
      >
        <button className="close">
          <img
            src={closeIcon}
            alt="close icon"
            onClick={() => setIsShowing(!isShowing)}
          />
        </button>
        <li>
          <Link
            to="/"
            style={
              currentRoute === ""
                ? { borderBottom: "2px solid white" }
                : { borderBottom: "2px solid transparent" }
            }
          >
            <strong>00</strong> Home
          </Link>
        </li>
        <li>
          <Link
            to="/destination"
            style={
              currentRoute === "destination"
                ? { borderBottom: "2px solid white" }
                : { borderBottom: "2px solid transparent" }
            }
          >
            <strong>01</strong> Destination
          </Link>
        </li>
        <li>
          <Link
            to="/crew"
            style={
              currentRoute === "crew"
                ? { borderBottom: "2px solid white" }
                : { borderBottom: "2px solid transparent" }
            }
          >
            <strong>02</strong> Crew
          </Link>
        </li>
        <li>
          <Link
            to="/technology"
            style={
              currentRoute === "technology"
                ? { borderBottom: "2px solid white" }
                : { borderBottom: "2px solid transparent" }
            }
          >
            <strong>03</strong> Technology
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default navbar;
