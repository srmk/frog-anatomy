import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ImageButton from "./image_button";

import { toggleSystem } from "../actions/anatomy_actions";

import { anatomyConfig } from "./anatomy_config";

class ButtonComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accordion: "accordion-show"
    };
  }
  render() {
    return (
      <div className={`button-parent ${this.state.accordion}`}>
        {anatomyConfig.map(btnNm => (
          <ImageButton
            key={btnNm.id}
            type={"image-label"}
            src={this.props[btnNm.id] ? btnNm.image : btnNm.selectedImg}
            altText={btnNm.id}
            selected={!this.props[btnNm.id]}
            buttonWrapperClass={"anatomy-buttons-wrapper"}
            onClick={() => this.props.dispatch(toggleSystem(btnNm.id))}
            hoverImg={btnNm.hoverImg}
          >
            {btnNm.displayName}
          </ImageButton>
        ))}
        <button
          className={"btn-accordion"}
          onClick={() => {
            this.setState({
              accordion:
                this.state.accordion === "accordion-show"
                  ? "accordion-hide"
                  : "accordion-show"
            });
          }}
        >
          ›
        </button>
      </div>
    );
  }
}

ButtonComponent.propTypes = {
  dispatch: PropTypes.func.isRequired,
  Skin: PropTypes.bool.isRequired,
  Skeleton: PropTypes.bool.isRequired,
  Muscles: PropTypes.bool.isRequired,
  Nervous: PropTypes.bool.isRequired,
  Heart: PropTypes.bool.isRequired,
  Lungs: PropTypes.bool.isRequired,
  Stomach: PropTypes.bool.isRequired
};

const mapStateToProps = ({ anatomy }) => {
  return {
    ...anatomy
  };
};

export default connect(mapStateToProps)(ButtonComponent);
