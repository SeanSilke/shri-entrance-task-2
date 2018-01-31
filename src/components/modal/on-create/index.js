import React from "react";
import { Modal } from "../index";
import { Link } from "react-router-dom";

export const ModalOnCreate = props => {
  return (
    <Modal onClick={() => props.history.push("/")}>
      <div className="App-modal-emoji emoji-success" />
      <div className="App-modal-header"> Встреча создана!</div>
      <div className="App-modal-date">
        14 декабря, <span>15:00—17:00</span>
      </div>
      <div className="App-modal-room"> Готем · 4 этаж</div>
      <div className="App-modal-bottom">
        <Link to="/" className="App-modal-button">
          Хорошо
        </Link>
      </div>
    </Modal>
  );
};
