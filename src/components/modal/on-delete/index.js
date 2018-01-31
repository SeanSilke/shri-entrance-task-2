import React from "react";
import { Modal } from "../index";
// import { Link } from "react-router-dom";

export const ModalOnDelete = ({ children }) => {
  const onClick = () => console.log("delete?");
  return (
    <Modal onClick={onClick}>
      <div className="App-modal-emoji emoji-warning" />
      <div className="App-modal-header">
        Встреча будет <br /> удалена безвозвратно
      </div>
      <div className="App-modal-bottom">{children}</div>
    </Modal>
  );
};
