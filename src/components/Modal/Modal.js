import React, { Component } from "react";
import styles from "./Modal.module.scss";
import PropTypes from "prop-types";
import Button from "../shared/Button";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import dailyRateSelector from "../../redux/user/userSelectors";
import { getDailyRate } from "../../redux/user/userOperations";

class Modal extends Component {
  static propTypes = {
    modal: PropTypes.func,
  };

  modal = (e) => {
    if (e.code === "Escape" || e.target.id === "overlay") {
      this.props.toggleModal();
    }
  };

  componentDidMount = () => {
    window.addEventListener("keydown", this.modal);
    window.addEventListener("click", this.modal);
  };

  componentWillUnmount = () => {
    window.removeEventListener("keydown", this.modal);
    window.removeEventListener("click", this.modal);
  };

  render() {
    return (
      <div id="overlay" className={styles.overlay}>
        <div className={styles.modal}>
          <button
            type="button"
            className={styles.closeModalBtn}
            type="button"
            onClick={this.props.toggleModal}
          >
            X
          </button>
          <div className={styles.wrapper}>
            <p className={styles.title}>
              Ваша рекомендуемая суточная норма калорий составляет
            </p>
            <div className={styles.container}>
              <p className={styles.caloriesText}>
                <span className={styles.caloriesValue}>
                  {this.props.calories}
                </span>
                ккал
              </p>
              <p className={styles.productsTitle}>
                Продукты, которые вам не рекомендуется употреблять
              </p>
              <ol className={styles.productsList}>
                {this.props.products &&
                  this.props.products.map((product, id) => (
                    <li key={id} className={styles.productsItem}>
                      {product}
                    </li>
                  ))}
              </ol>
              <Button>
                <NavLink to="/register" className={styles.buttonLink}>
                  Начать худеть
                </NavLink>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  calories: dailyRateSelector.getCalories(state),
  products: dailyRateSelector.getProducts(state),
});

export default connect(mapStateToProps)(Modal);
