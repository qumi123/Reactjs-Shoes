import React, { Component } from "react";
import { DataContext } from "./context";

class ProductItem extends Component {
  static contextType = DataContext;

  render() {
    console.log(this.context.cart);

    const { name, image, price } = this.props.prod;
    return (
      <div className="card mb-5">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">${price}</p>
          <button
            onClick={() => {
              this.props.setSelectedProduct(this.props.prod);
            }}
            className="btn btn-info"
          >
            Detail
          </button>
          <button
            onClick={() => {
              this.context.onAddToCart(this.props.prod);
            }}
            className="btn btn-primary"
          >
            Add
          </button>
        </div>
      </div>
    );
  }

}

export default ProductItem;
