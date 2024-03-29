import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export const Tooltip = () => (
  <div className="App-tooltip">
    <Link to="/edit" className="App-tooltip-button" />
    <div className="tooltip-header">Рассуждения о высоком</div>
    <div className="tooltip-details">14 декабря, 15:00—17:00 · Жёлтый дом</div>
    <div className="tooltip-participants">
      <div className="tooltip-participants-main">
        <div className="icon vader" />
        Дарт Вейдер
      </div>
      <div className="tooltip-participants-rest">&nbsp; и 12 участников</div>
    </div>
  </div>
);
