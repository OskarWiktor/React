import React from "react";
import PropTypes from "prop-types";

function SaveButton({onClick}) {
  return (
    <button className="save-button" onClick={onClick}>
      <p>Save</p>
    </button>
  );
}

SaveButton.propTypes = {
  onClick: PropTypes.func,
};

export default SaveButton;
