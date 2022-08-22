import React from "react";
import PropTypes from "prop-types";
import CreatProductBtn from "../../components/CreatProducBtn";
import "./style.scss";
import { Link } from "react-router-dom";

Header.propTypes = {};

function Header(props) {
  return (
    <div className="header">
      <Link
        to="/shopping-app/products"
        className="logo"
        title="http://localhost:3000/shopping-app"
      >
        <img
          src="https://seeklogo.com/images/C/classy-mens-wear-logo-DF8B1EE3E6-seeklogo.com.png"
          alt=""
        />
      </Link>
      <div className="nav-bar">
        <CreatProductBtn />
      </div>
    </div>
  );
}

export default Header;
