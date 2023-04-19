import React, { Component } from "react";
import "./style.css";
import Title from "../Title/Title";
import ModelGlass from "../ModelGlass/ModelGlass";


export default class BaiTapChonKinh extends Component {
  glasses = [
    {
        "id": 1,
        "price": 30,
        "name": "GUCCI G8850U",
        "url": "./glassesImage/v1.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 2,
        "price": 50,
        "name": "GUCCI G8759H",
        "url": "./glassesImage/v2.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 3,
        "price": 30,
        "name": "DIOR D6700HQ",
        "url": "./glassesImage/v3.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 4,
        "price": 70,
        "name": "DIOR D6005U",
        "url": "./glassesImage/v4.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 5,
        "price": 40,
        "name": "PRADA P8750",
        "url": "./glassesImage/v5.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 6,
        "price": 60,
        "name": "PRADA P9700",
        "url": "./glassesImage/v6.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 7,
        "price": 80,
        "name": "FENDI F8750",
        "url": "./glassesImage/v7.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 8,
        "price": 100,
        "name": "FENDI F8500",
        "url": "./glassesImage/v8.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 9,
        "price": 60,
        "name": "FENDI F4300",
        "url": "./glassesImage/v9.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
  ];

  state = {
    srcGlass: "",
    nameGlass: "",
    infoGlass: "",
  };

  changeGlass = (url, name, desc) => {
    this.setState({
      srcGlass: `${url}`,
      nameGlass: `${name}`,
      infoGlass: `${desc}`,
    });
  };

  renderGlass = () => {
    let arrGlass = this.glasses.map((glass)=>{
      return <div
      onClick={() => {
        this.changeGlass(glass.url, glass.name, glass.desc);
      }}
    >
      <img
        src={glass.url}
        alt="."
        className="w-glass s-item p-2 m-3"
      />
    </div>
    });
    return arrGlass;
  }

  render() {
    return (
      <div className="bg-img h-100">
        <Title/>

        <div className="model container">
          <ModelGlass/>

          <div className="model-sub model-img container text-center">
            <img
              src="./glassesImage/model.jpg"
              alt="..."
              className="w-model mb-3"
            />
            <div className="model-glass">
              <img src={this.state.srcGlass} alt="" className="w-glass-opa" />
            </div>
            <div className="glass-info bg-inf p-1">
              <h5>{this.state.nameGlass}</h5>
              <p>{this.state.infoGlass}</p>
            </div>
          </div>

        </div>

        <div className="list-glass pb-5">
          <div className="glasses container bg-light p-3 mt-3">
            <div className="s-list d-flex justify-content-center p-0">
              {this.renderGlass()}
            </div>
          </div>
        </div>

      </div>
    );
  }
}
