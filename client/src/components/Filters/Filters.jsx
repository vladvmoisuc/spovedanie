import React, { Component } from "react";
import classNames from "classnames";
import Button from "../Button";
import { menu } from "../../constants/constants";

// Stylesheet
import "./Filters.scss";

class Filters extends Component {
  state = {
    isAllSelected: true,
    categories: {}
  };

  componentDidUpdate(prevProps, prevState) {
    const { categories } = this.state;
    if (prevState.categories !== categories) {
      this.handleAllToggle();
      this.props.onFilter(categories);
    }
  }

  handleFiltering = e => {
    const { value } = e.target;
    if (value === "all") this.handleAllFilter();
    else this.handleFilter(value);
  };

  handleFilter = category => {
    const categories = { ...this.state.categories };
    if (categories[category]) {
      delete categories[category];
    } else {
      categories[category] = category;
    }
    this.setState({
      categories
    });
  };

  handleAllFilter = () => {
    const { isAllSelected, categories } = this.state;
    if (isAllSelected) {
      if (!Object.keys(categories).length) return;
      this.setState({
        isAllSelected: false
      });
    } else {
      this.handleFiltersReset();
    }
  };

  handleFiltersReset = () => {
    this.setState({
      isAllSelected: true,
      categories: {}
    });
  };

  handleAllToggle = () => {
    let { categories } = this.state;
    const { length: categoriesLength } = Object.keys(categories);
    const { length: menuLength } = Object.keys(menu);
    if (categoriesLength) {
      this.setState({
        isAllSelected: false
      });
    }
    if (categoriesLength === menuLength - 1) {
      this.handleFiltersReset();
    }
  };

  render() {
    const { isAllSelected, categories } = this.state;
    return (
      <div className="filters">
        {menu.map(({ label, category, color, isAll }) => (
          <Button
            label={label}
            value={isAll ? "all" : category}
            key={category}
            className={classNames(
              "filters__button",
              `filters__button_${color}`,
              {
                [`filters__button_${color}-active`]: isAll
                  ? isAllSelected
                  : categories[category]
              }
            )}
            onClick={this.handleFiltering}
          />
        ))}
      </div>
    );
  }
}

export default Filters;
