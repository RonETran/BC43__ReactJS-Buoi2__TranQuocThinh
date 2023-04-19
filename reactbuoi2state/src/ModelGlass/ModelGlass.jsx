import React, { Component } from 'react'

export default class ModelGlass extends Component {
  render() {
    return (
        <div className="model-main model-img container text-center">
        <img
          src="./glassesImage/model.jpg"
          alt="..."
          className="w-model mb-3"
        />
        <div className="model-glass">
          <img src="./glassesImage/v1.png" alt="" className="w-glass-opa" />
        </div>
        <div className="glass-info bg-inf p-1">
          <h5>GUCCI G8850U</h5>
          <p>
            Light pink square lenses define these sunglasses, ending with
            amother of pearl effect tip.
          </p>
        </div>
      </div>

    )
  }
}
