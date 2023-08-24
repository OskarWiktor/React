import React from "react";

function AddButton({onClick, children}) {
  return (
    <button className="add-button" onClick={onClick}>
      {children}
    </button>
  );
}

export default AddButton;
