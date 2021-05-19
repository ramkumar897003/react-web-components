import React from "react";
import ReactDom from "react-dom";
import reactToWebComponent from "react-to-webcomponent";
import PropTypes from "prop-types";

class Button extends React.Component {
  render() {
    return (
      <button
        style={{
          color: this.props.color || "#000",
          background: this.props.background || "#ddd",
          border: "none",
          padding: 10,
        }}
        onClick={() => eval(this.props.action)}
      >
        {this.props.text}
      </button>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.string,
  color: PropTypes.string,
  background: PropTypes.string,
};

customElements.define(
  "app-button",
  reactToWebComponent(Button, React, ReactDom)
);
