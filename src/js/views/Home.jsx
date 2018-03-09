import React from "react";
import Flux from "react-flux-dash";
import { Link } from "react-router-dom";
//include images into your bundle
import rigoImage from '../../img/rigo-baby.jpg';

export default class Home extends Flux.View {
  render() {
    return (
        <div className="text-center mt-5">
            <h1>Hello Rigo!</h1>
            <p><img src={'./public/'+rigoImage} /></p>
            <a href="#" className="btn btn-success">If you see this gree button... bootstrap is working</a>
            <ul>
                <li>
                    <Link to="/product/1">Go to product 1</Link>
                </li>
                <li>
                    <button onClick={() => this.props.history.push("/product/2")}>
                    Go to product 2
                    </button>
                </li>
            </ul>
        </div>
    );
  }
}
