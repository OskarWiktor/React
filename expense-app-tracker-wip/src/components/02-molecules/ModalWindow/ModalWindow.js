import React from "react";

function ModalWindow({children}) {
  return (
    <section className="modal-window">
      <div className="modal-window--container">
        {children}
      </div>
    </section>
  );
}

export default ModalWindow;
