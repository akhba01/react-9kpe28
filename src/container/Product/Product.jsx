import React, {Component} from 'react';

class Product extends Component{
  render(){
    return(
      <div className = "header">
                <div className="logo">
                <img src="" alt=""/>
                </div>
        <div className="troley">
          <img src="" alt=""/>
        </div>
      <div className = "card">
            <div className="img-thumb-prod">
              <img src="" alt=""/>
            </div>
      </div>
        <p className="product-title">Daging Ayam</p>
        <p className="product-price">Rp. 410.000</p>
        <div className = "card">
        <div className="counter">
          <button className="MINUS"></button>
          <img src="" alt=""/>
            <button className="PLUS"></button>
        </div>
      </div>
      </div>

      
    )
  }
}