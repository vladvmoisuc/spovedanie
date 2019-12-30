import React, { Component } from "react";
import ReactDOM from "react-dom";
import classnames from "classnames";
import Button from "../Button";
import { ReactComponent as CloseIcon } from "../../images/x-icon.svg";
import "./Modal.scss";

const body = document.getElementsByTagName("body")[0];
const container = document.createElement("div");
container.className = "ui-components";

class Modal extends Component {
  componentDidMount = () => {
    body.appendChild(container);
    document.addEventListener("click", this.closeModal);
    document.addEventListener("keydown", e => {
      if (e.code === "Escape") {
        this.props.closeModal();
      }
    });
  };

  componentWillUnmount = () => {
    body.removeChild(container);
    document.removeEventListener("click", this.closeModal);
  };

  closeModal = e => {
    const { isModalVisible, closeModal } = this.props;
    if (isModalVisible) {
      const modal = document.getElementsByClassName("modal")[0];
      if (modal && modal !== e.target && !modal.contains(e.target)) {
        closeModal();
      }
    }
  };

  render() {
    const {
      title,
      secondaryTitle,
      children,
      className,
      buttonLabel,
      closeModal
    } = this.props;
    return ReactDOM.createPortal(
      <div className="mask">
        <div className={classnames("modal", className)}>
          <div className="modal__top-bar">
            <span className="modal__heading heading">{title}</span>
            <CloseIcon className="modal__close-icon" onClick={closeModal} />
          </div>
          <span className="modal__sub-heading sub-heading">
            {secondaryTitle}
          </span>
          <div className="modal__content">
            {children}
            <Button
              label={buttonLabel}
              className="button_blue"
              onClick={closeModal}
            />
          </div>
        </div>
      </div>,
      container
    );
  }
}

export default Modal;
