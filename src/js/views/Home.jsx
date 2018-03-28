import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
//include images into your bundle
import rigoImage from '../../img/rigo-baby.jpg';
import ButtonComponent from '../components/ButtonComponent.jsx';

export default class Home extends Flux.View {
  render() {
    return (
        <div className="text-center mt-5">
            <h1>Hello Rigo!</h1>
            <p><img src={'./public/'+rigoImage} /></p>
            <a href="#" className="btn btn-success">If you see this button in green Bootstrap is working!</a>
            <ul className="nav navbar-nav list-inline">
                <li className="list-inline-item">
                    <Link to="/product/1">Go to product 1</Link>
                </li>
                <li className="list-inline-item">
                    <button className='btn btn-light' onClick={() => this.props.history.push("/product/2")}>
                    Go to product 2
                    </button>
                </li>
                <li className="list-inline-item">
                    <ButtonComponent color='light' to="/product/3" label="Go to product 3" />
                </li>
            </ul>
        </div>
    );
  }
}
