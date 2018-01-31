import React from "react";

import "./style.css";

export const Modal = ({ children, onClick }) => {
  return (
    <div className="App-modal" onClick={onClick}>
      <div
        className="App-modal-window"
        onClick={e => {
          e.stopPropagation();
          e.preventDefault();
        }}
      >
        {children}
      </div>
    </div>
  );
};
