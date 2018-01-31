import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Diagram } from "./diagram";
import { Edit, New } from "./meeting-editing";
import { ModalOnCreate } from "./components/modal/on-create";
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
          <Route path="/new" component={New} />
          <Route path="/edit" component={Edit} />
        </Switch>
        {isModal ? <Route exact path="/" component={ModalOnCreate} /> : null}
      </div>
    );
  }
}

export default App;
