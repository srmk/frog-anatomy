import React, { Component } from "react";
import PropTypes from "prop-types";
import screenfull from "screenfull";

import fullscreenIconImage from "../media/max.png";

class FullscreenButton extends Component {
  constructor() {
    super();
    this.fullscreenButton = null;
    this.toggleFullscreen = this.toggleFullscreen.bind(this);
  }
  componentDidMount() {
    this.fullscreenButton.addEventListener("click", this.toggleFullscreen);
  }
  componentWillUnmount() {
    this.fullscreenButton.removeEventListener("click", this.toggleFullscreen);
  }
  toggleFullscreen() {
    const el = document.getElementsByClassName(
      this.props.fullscreenElementClass
    )[0];
    if (screenfull.enabled) {
      screenfull.toggle(el);
    }
    this.timeout = setTimeout(() => {
      this.props.fnCall();
      clearTimeout(this.timeout);
    }, 1000);
  }
  render() {
    return (
      <div className={"anatomy-extra"}>
        <button
          ref={el => {
            this.fullscreenButton = el;
          }}
          className={"btn btn-image"}
        >
          <img src={fullscreenIconImage} alt="fullscreen" />
        </button>
      </div>
    );
  }
}

FullscreenButton.propTypes = {
  fullscreenElementClass: PropTypes.string.isRequired,
  fnCall: PropTypes.func
};

FullscreenButton.defaultProps = {
  fnCall: () => {}
};

export default FullscreenButton;
