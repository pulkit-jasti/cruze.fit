import React, { Component } from "react";

class ExerciseCard extends Component {
  render() {
    return (
      <div className="exercise-card">
        <img src={this.props.img} alt="" />
        <h3>{this.props.title}</h3>
      </div>
    );
  }
}

export default ExerciseCard;
