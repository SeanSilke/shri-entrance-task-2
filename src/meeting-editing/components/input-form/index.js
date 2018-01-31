import React from "react";
import { Timepicker } from "../timepicker";
import { MembersSelect } from "../members-select";
import { RoomSelect } from "../room-select";
import { TitleInput } from "../title-input";
import "./style.css";
import "./input.css";
import "./responsive.css";

export const InputForm = ({ onCancel, title }) => (
  <div className="editing-main">
    <div className="row">
      <div className="editing-header-title"> {title} </div>
      <div className="editing-exit-button hidden-mobile" onClick={onCancel} />
    </div>

    <div className="row">
      <TitleInput />
      <Timepicker />
    </div>

    <div className="row">
      <MembersSelect />
      <div className="mobile-divider" />
      <RoomSelect />
    </div>
  </div>
);
