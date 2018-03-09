import React from "react";
import Flux from "react-flux-dash";
import { Link } from "react-router-dom";

export default class Product extends Flux.View {
  render() {
    return (
            <div>
                <h1>Product {this.props.match.params.id}</h1>
                <Link to="/home">Back to home</Link>
            </div>
        )
  }
}