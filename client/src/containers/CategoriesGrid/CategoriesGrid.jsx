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
            secondaryTitle="Cum se joacă, in 4 pasi"
            buttonLabel="Am inteles."
            isModalVisible={isModalVisible}
            closeModal={this.closeModal}
            className="modal_text-centered"
          >
            <p>1. Selecteaza o categorie si alege o intrebare.</p>
            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HMWT2_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1553643128805" />
            <p>
              2. Citeste-o cu voce tare sau trimite-o persoanei cu care vrei sa
              joci.
            </p>
            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HMWT2_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1553643128805" />
            <p>
              3. Ti-a raspuns? Atunci e randul persoanei cu care joci sa aleaga
              o intrebare.
            </p>
            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HMWT2_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1553643128805" />
            <p>
              4. Puneti o miza. De exemplu, cine nu raspunde bea un shot, face o
              provocare sau ii da celuilalt niste bani(50 de bani, sau ceva).
            </p>
            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HMWT2_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1553643128805" />
          </Modal>
        )}
      </div>
    );
  }
}

export default CategoriesGrid;
