import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
ToTopBtn.propTypes = {};

function ToTopBtn(props) {
  const { handleToTop } = props;
  return (
    <button
      className="totop"
      onClick={() => {
        handleToTop();
      }}
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
}

export default ToTopBtn;
