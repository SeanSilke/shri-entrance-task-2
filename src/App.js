import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Diagram } from "./diagram";
import { Edit, New } from "./meeting-editing";
import { Modal } from "./components/modal";
import "./app.css";

class App extends Component {
  render() {
    let isModal = false;
    if (this.props.location.state) {
      isModal = this.props.location.state.modal;
    }
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Diagram} />
          <Route path="/new" component={Edit} />
          <Route path="/edit" component={New} />
        </Switch>
        {isModal ? <Route exact path="/" component={Modal} /> : null}
      </div>
    );
  }
}

export default App;
