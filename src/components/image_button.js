import React from "react";
import PropTypes from "prop-types";

/** `import { ImageButton } from 'cdlo_components';` */
const ImageButton = ({
  disabled,
  altText,
  children,
  type,
  src,
  onClick,
  selected,
  buttonWrapperClass,
  hoverImg
}) => (
  <div className={buttonWrapperClass}>
    <button
      className={selected ? `btn btn-${type} active` : `btn btn-${type}`}
      onClick={onClick}
      disabled={disabled}
      // onMouseOver={() => {
      //   this[altText].src = hoverImg;
      // }}
      // onMouseOut={() => {
      //   this[altText].src = src;
      // }}
    >
      <img
        src={src}
        // ref={el => {
        //   this[altText] = el;
        // }}
        alt={altText}
        role={altText ? null : "presentation"}
      />
      {children ? (
        <label className="btn-image-label" htmlFor={altText}>
          {children}
        </label>
      ) : null}
    </button>
  </div>
);

ImageButton.defaultProps = {
  type: "",
  altText: "",
  disabled: false,
  selected: false,
  buttonWrapperClass: ""
};

ImageButton.propTypes = {
  type: PropTypes.oneOf(["image", "image-label"]),
  children: PropTypes.node,
  onClick: PropTypes.func,
  hoverImg: PropTypes.string,
  src: PropTypes.string,
  altText: PropTypes.string,
  disabled: PropTypes.bool,
  selected: PropTypes.bool,
  buttonWrapperClass: PropTypes.string
};

export default ImageButton;
