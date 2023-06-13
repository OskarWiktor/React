import React from "react";
import PropTypes from "prop-types";

function EditButton({onClick}) {
  return (
    <button className="edit-button" onClick={onClick}>
      <p>...</p>
    </button>
  );
}

EditButton.propTypes = {
  onClick: PropTypes.func,
};

export default EditButton;
