import React from "react";

function ModalInput({type, id, name, value, onChange, maxLength}) {
  return (
    <input
      className="modal-input"
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      maxLength={maxLength}
    />
  );
}

export default ModalInput;
