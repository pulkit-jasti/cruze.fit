import React, { Component } from "react";

import ExerciseCard from "./components/ExerciseCard";
import "./style.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import pushup from "./assets/pushup.png";
import skipping from "./assets/skipping.png";
import squats from "./assets/squats.png";
import pullup from "./assets/pullup.png";
import weight from "./assets/weight.png";
import crunches from "./assets/crunches.png";
import earth from "./assets/earth.png";

import axios from "axios";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      videoURL: earth,
      exerciseTitle: "Null",
      calories: 0,
      count: 0,
    };
  }

  toggleModal(data) {
    // console.log("testtttt", data);

    if (typeof data == "string") {
      this.setState({
        modal: !this.state.modal,
      });
    } else {
      this.setState({
        modal: !this.state.modal,
        exerciseTitle: data.title,
        videoURL: data.videoURL,
      });
    }
  }

  getExerciseData() {
    // console.log("test");

    axios
      .get("http://192.168.10.150:5000/res")
      .then((res) => {
        console.log("Response:", res);
        this.setState({ count: res.data.count, calories: res.data.cal });
      })
      .catch((err) => {
        console.warn("errorrrrrrr", err);
      });
  }

  render() {
    setTimeout(() => {
      this.getExerciseData();
    }, 3000);

    let exerciseData = [
      {
        title: "Crunches",
        imgURL: crunches,
        videoURL: "http://192.168.10.150:5000/cru",
      },
      {
        title: "Squats",
        imgURL: squats,
        videoURL: "http://192.168.10.150:5000/squats",
      },
      {
        title: "Pushups",
        imgURL: pushup,
        videoURL: "http://192.168.10.150:5000/push",
      },
      {
        title: "Pullups",
        imgURL: pullup,
        videoURL: "http://192.168.10.150:5000/pull",
      },
      {
        title: "Weight Lifting",
        imgURL: weight,
        videoURL: "http://192.168.10.150:5000/weight",
      },
      {
        title: "Skipping",
        imgURL: skipping,
        videoURL: "http://192.168.10.150:5000/squats",
      },
    ];

    return (
      <main>
        <Modal
          isOpen={this.state.modal}
          size="lg"
          toggle={this.toggleModal.bind(this, "Null")}
          className="primary-modal"
          centered
        >
          <ModalHeader toggle={this.toggleModal.bind(this, "Null")}>{this.state.exerciseTitle}</ModalHeader>
          <ModalBody>
            <img src={this.state.videoURL} alt="" />
            <div className="exercise-info">
              Count: {this.state.count}
              <br />
              Calories: {this.state.calories}
            </div>
          </ModalBody>
        </Modal>

        <div className="card-container">
          {/* <ExerciseCard img={pushup} title="Pushups" onClick={this.toggleModal} />
          <ExerciseCard img={skipping} title="Skipping" onClick={this.toggleModal} />
          <ExerciseCard img={lunges} title="Lunges" onClick={this.toggleModal} />
          <ExerciseCard img={pullup} title="Pullup" onClick={this.toggleModal} />
          <ExerciseCard img={weight} title="Weight Lifting" onClick={this.toggleModal} />
          <ExerciseCard img={crunches} title="Situps" onClick={this.toggleModal} /> */}

          {exerciseData.map((el, index) => {
            return (
              <div
                className="exercise-card"
                key={index}
                onClick={this.toggleModal.bind(this, { title: el.title, videoURL: el.videoURL })}
              >
                <img src={el.imgURL} alt="" />
                <h3>{el.title}</h3>
              </div>
            );
          })}
        </div>
      </main>
    );
  }
}

export default App;
