import React, {Component} from "react";
import {useState } from "react";
import "./App.css";

const urlApi =
  "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json";
  let colors = ['E8505B', 'F9D56E', 'F3ECC2', '65D6CE', 'F5A25D']



class App extends Component {
   
  constructor(prop) {
    super(prop);
    this.state = {
      // This is our Default number value
      ColorNumber: 1,
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
    var randomColornum = (Math.floor(Math.random() * 4) + 0);
    this.setState({
      ColorNumber: randomColornum,
      NumberHolder: RandomNumber,
      quote: this.state.neededData[this.state.NumberHolder]["quote"],
      author: this.state.neededData[this.state.NumberHolder]["author"]
    });  
      
  };
  render() {
    return (
      <div className="boxik">
        <button onClick={this.GenerateRandomNumber} style={{"borderColor":"#" + `${colors[this.state.ColorNumber]}`, "border":"solid" , "borderWidth": "1px", "color": "#" + `${colors[this.state.ColorNumber]}` }}>{"#" + colors[this.state.ColorNumber]}
        </button>
        <div className="quote" style={{"color": "#" + `${colors[this.state.ColorNumber]}` }}>{this.state.quote}</div>
  
      </div>
    );
  }
}

export default App;
