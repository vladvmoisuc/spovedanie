import React, { Component } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

// Constants
import { menu } from "../../constants/constants";

// Components
import Button from "./../../components/Button";
import Grid from "./../../components/Grid";
import Modal from "../../components/Modal";

// Stylesheet
import "./CategoriesGrid.scss";

class CategoriesGrid extends Component {
  state = {
    isModalVisible: false
  };

  openModal = () => {
    this.setState({
      isModalVisible: true
    });
  };

  closeModal = () => {
    this.setState({
      isModalVisible: false
    });
  };

  render() {
    const { isModalVisible } = this.state;
    const { className } = this.props;
    return (
      <div className={classNames("categories-grid", className)}>
        <Grid className="categories-grid__buttons">
          {menu.map(menuItem => (
            <Link to={`/${menuItem.category}/1`} key={menuItem.category}>
              <Button
                label={menuItem.label}
                className={classNames(
                  "main__menu-button button_full-width",
                  `button_${menuItem.color}`
                )}
              />
            </Link>
          ))}
        </Grid>
        <div className="categories-grid__tutorial">
          <Button
            className="button_link"
            label="CUM SE JOACĂ?"
            onClick={this.openModal}
          />
        </div>
        {isModalVisible && (
          <Modal
            title="Cum se joacă?"
            isModalVisible={isModalVisible}
            closeModal={this.closeModal}
          ></Modal>
        )}
      </div>
    );
  }
}

export default CategoriesGrid;
