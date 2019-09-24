import React, { Component } from "react";
import ThreeJsCanvas from "./components/threejs_canvas";
// import PropTypes from "prop-types";

class Anatomy extends Component {
  render() {
    return (
      <div className={"common-container anatomy-container col-md-12"}>
        <ThreeJsCanvas />
      </div>
    );
  }
}

Anatomy.propTypes = {};

export default Anatomy;
