import React, { Component } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

// Constants
import { menu } from "../../constants/constants";

// Components
import Button from "./../../components/Button";
import Grid from "./../../components/Grid";
import Modal from "../../components/Modal";

// Images
import Tutorial1 from "../../images/tutorial-1.png";
import Tutorial2 from "../../images/tutorial-2.png";
import Tutorial3 from "../../images/tutorial-3.png";
import Tutorial4 from "../../images/tutorial-4.png";

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
            <Link to={`/${menuItem.category}`} key={menuItem.category}>
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
            <p>1. Selectează o categorie și alege o întrebare.</p>
            <img
              alt="Apasă pe o categorie din meniul principal."
              src={Tutorial1}
            />
            <p>
              2. Citește-o cu voce tare sau trimite-o persoanei cu care vrei să
              joci.
            </p>
            <img alt="Trimite întrebarea unui prieten." src={Tutorial2} />
            <p>
              3. Ți-a răspuns? E momentul să faceți schimb de roluri. Tura asta
              tu o să răspunzi la o întrebare.
            </p>
            <img
              alt="Spune-i prietenului tău că e rândul său acum."
              src={Tutorial3}
            />
            <p>
              4. Puneți o miza. De exemplu, cine nu raspunde bea un shot, face o
              provocare sau îi dă celuilalt niște bani(5 bani, 10 bani, 15, 25
              de bani).
            </p>
            <img alt="Puneți o miză și distrați-vă." src={Tutorial4} />
          </Modal>
        )}
      </div>
    );
  }
}

export default CategoriesGrid;
