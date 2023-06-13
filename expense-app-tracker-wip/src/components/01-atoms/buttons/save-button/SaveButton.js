import React from "react";

function SaveButton({onClick}) {
  return (
    <button className="save-button" onClick={onClick}>
      <p>Save</p>
    </button>
  );
}

export default SaveButton;
