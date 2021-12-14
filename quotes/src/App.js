import React, {Component} from "react";
import {useState } from "react";
import "./App.css";

const urlApi =
  "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json";

class App extends Component {
   
  constructor(prop) {
    super(prop);
    this.state = {
      // This is our Default number value
      NumberHolder: 1,
      neededData: [],
      quote: '',
      author: ""
    };
  }
  componentDidMount() {
    fetch(urlApi)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      this.setState({
          neededData: data,
          quote: data[Math.floor(Math.random() * 101) + 0]["quote"],
          author: data[Math.floor(Math.random() * 101) + 0]["author"]
      });
      console.log(this.state.neededData)

    })
    .catch((error) => console.log(error));
 
}

  GenerateRandomNumber = () => {
    var RandomNumber = Math.floor(Math.random() * 101) + 0;

    this.setState({
      NumberHolder: RandomNumber,
      quote: this.state.neededData[this.state.NumberHolder]["quote"],
      author: this.state.neededData[this.state.NumberHolder]["author"]
    });  
      
  };
  render() {
    return (
      <>
        <button onClick={this.GenerateRandomNumber}>
          {this.state.NumberHolder}
        </button>
        <div>{this.state.quote}</div>
        {/* <div>{this.state.neededData[this.state.NumberHolder]["author"]}</div> */}
      </>
    );
  }
}

export default App;
