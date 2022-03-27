import React, { Component } from "react";

import ExerciseCard from "./components/ExerciseCard";
import "./style.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import pushup from "./assets/pushup.png";
import skipping from "./assets/skipping.png";
import lunges from "./assets/lunges.png";
import pullup from "./assets/pullup.png";
import weight from "./assets/weight.png";
import situps from "./assets/situps.png";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  render() {
    return (
      <main>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} centered>
          {/* <ModalHeader toggle={this.toggle}>Modal title</ModalHeader> */}
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </ModalBody>
        </Modal>

        <div className="card-container">
          <ExerciseCard img={pushup} title="Pushups" onClick={this.toggle} />
          <ExerciseCard img={skipping} title="Skipping" />
          <ExerciseCard img={lunges} title="Lunges" />
          <ExerciseCard img={pullup} title="Pullup" />
          <ExerciseCard img={weight} title="Weight Lifting" />
          <ExerciseCard img={situps} title="Situps" />
        </div>
      </main>
    );
  }
}

export default App;
