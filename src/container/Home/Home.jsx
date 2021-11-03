import React, {Component} from 'react';
import Product from '../Product/Product';
class Home extends Component {
  render(){
    return (
      <div>
        {/* <p> YoTube Component </p>
        <hr/>
        <YouTubeComp 
        time ="7.12"
        title= "Tutorial React Js"
        desc = "20x ditonton 10 hari yang lalu" />
        <YouTubeComp 
        time ="8.12"
        title= "Tutorial React Js"
        desc = "20x ditonton 10 hari yang lalu" />
        <YouTubeComp 
        time ="30.12"
        title= "Tutorial React Js"
        desc = "20x ditonton 10 hari yang lalu" />
        <YouTubeComp 
        time ="7.12"
        title= "Tutorial React Js"
        desc = "20x ditonton 10 hari yang lalu" />
        <p>Counter</p>
        <hr/> */}
        <Product />
      </div>
        
      
      )
  }
}

export default Home;