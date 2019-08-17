import React, { Component } from 'react';
import './App.css';
import * as api from './api';

class App extends Component {

constructor(props) {
  super(props);
  this.state = {colorCodeJson:[], loading:false};
}

componentDidMount() {
  api.getColorCode().then(res => this.setState({colorCodeJson:res, loading:true}))
  .catch(error => {
    console.log("Error: ", error)
  });
}

render() {
  let color = this.state.colorCodeJson;
  let fontcolor='#FFFFFF';
  console.log(color.length);
  if(this.state.loading) {
    console.log("change font");
    fontcolor=color.colors[0].value;
  }
  console.log(fontcolor);
  return (
    this.state.loading?
    <div className="App">
      <div style={{backgroundColor:fontcolor}}> yoyo </div>
    </div>
    :
    <div className="App">
      <h1 style={{fontColor:fontcolor}}> Processing </h1>
    </div>
  );
}
}
export default App;
