import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ButtonComponent from "./ButtonComponent";
import threeEntryPoint from "./frog/three_entry_point";
import { organsOfFrog } from "./anatomy_config";
import FullscreenElement from "./fullscreen_button";

class CanvasThreeJs extends Component {
  constructor() {
    super();
    this.state = {
      assetLoaded: 0
    };
    this.resizeFn = () => { };
    this.assetsLoadingTracker = this.assetsLoadingTracker.bind(this);
  }
  componentDidMount() {
    this.timeout = setTimeout(() => {
      const humanSystem = { ...this.props };
      delete humanSystem.dispatch;
      this.entryPoint = new threeEntryPoint(
        this.threeRootElement,
        humanSystem,
        this.assetsLoadingTracker,
        organsOfFrog()
      );
      if (this.entryPoint.sceneManager) {
        this.resizeFn = this.entryPoint.sceneManager.onWindowResize;
      }
      clearTimeout(this.timeout);
    }, 1000);
  }
  componentWillReceiveProps(nextProps) {
    const newHumanSystem = { ...nextProps };
    delete newHumanSystem.dispatch;
    if (this.entryPoint) {
      this.entryPoint.upDateSystem(newHumanSystem);
    }
  }
  componentWillUnmount() {
    if (this.entryPoint) {
      this.entryPoint.dispose();
    }
  }
  assetsLoadingTracker(loaded) {
    this.setState({
      assetLoaded: Math.floor(loaded)
    });
  }
  render() {
    return (
      <Fragment>
        {this.state.assetLoaded === 100 ? null : (
          <div className="cssload-loader">
            <div className="cssload-inner cssload-one" />
            <div className="cssload-inner cssload-two" />
            <div className="cssload-inner cssload-three" />
          </div>
        )}
        <div
          style={{
            display: this.state.assetLoaded === 100 ? "block" : "none",
            width: "100%"
          }}
          className="header-header anatomy-canvas"
          ref={element => (this.threeRootElement = element)}
        >
          <ButtonComponent />
          <FullscreenElement
            fullscreenElementClass={"anatomy-container"}
            fnCall={this.resizeFn}
          />
          <canvas id={"tooltipCanvas"} />
        </div>
      </Fragment>
    );
  }
}

CanvasThreeJs.propTypes = {
  Skin: PropTypes.bool.isRequired,
  Skeleton: PropTypes.bool.isRequired,
  Muscles: PropTypes.bool.isRequired,
  Nervous: PropTypes.bool.isRequired,
  Heart: PropTypes.bool.isRequired,
  Lungs: PropTypes.bool.isRequired,
  Stomach: PropTypes.bool.isRequired
};

function mapStateToProps({ anatomy }) {
  return {
    ...anatomy
  };
}

export default connect(mapStateToProps)(CanvasThreeJs);
