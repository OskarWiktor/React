import React from "react";

function DeleteButton({onClick}) {
  return (
    <button className="delete-button" onClick={onClick}>
      <p className="delete-button--text">usuń</p>
    </button>
  );
}

export default DeleteButton;
