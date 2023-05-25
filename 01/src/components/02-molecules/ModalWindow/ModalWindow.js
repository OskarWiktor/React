import React from "react";
import PropTypes from "prop-types";

function ModalWindow({children}) {
  return (
    <section className="modal-window">
      <div className="modal-window--container">
        {children}
      </div>
    </section>
  );
}

ModalWindow.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ModalWindow;
