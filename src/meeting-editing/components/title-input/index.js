import React from "react";
import "./style.css";

export const TitleInput = () => (
  <div className="title-input">
    <div className="editing-input-title"> Тема </div>
    <input className="editing-input" placeholder="О чём будете говорить?" />
  </div>
);
