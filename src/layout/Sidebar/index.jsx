import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

Sidebar.propTypes = {};

function Sidebar(props) {
  return (
    <div className="side-bar">
      <h3>Size: {}</h3>
      <div className="size-select">
        <a className="size-select-item">XS</a>
        <a className="size-select-item">S</a>
        <a className="size-select-item">M</a>
        <a className="size-select-item">ML</a>
        <a className="size-select-item">L</a>
        <a className="size-select-item">XL</a>
        <a className="size-select-item">XXL</a>
        <a className="size-select-item">ALL</a>
      </div>
      <p>Leave a star on Github if thí repository was usefull :)</p>
      <button>
        <FontAwesomeIcon icon={faGithub} />
      </button>
    </div>
  );
}

export default Sidebar;
