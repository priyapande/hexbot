import React, { Component } from 'react';
import tinycolor from 'tinycolor2';

class AnimatedColor extends Component {

  createSmallDiv() {
    let outer = [];
    console.log("prop-"+this.props.color);
    let baseColor = tinycolor(this.props.color);
    let newColor;
    let count = 0;
    for(let i=0; i<500 ; i++) {
      for(let j=0;j<500;j++) {
        if(j%2===0) newColor = baseColor.brighten(i).toString();
        else newColor = baseColor.darken(i).toString();
        outer.push(<div key={count} style={{height:'1px', width:'1px', backgroundColor:newColor, float:'left'}}/>);
        count++;
      }
    }
    return outer;
  }

  render() {
    return (
      <div style={{height:'500px', width:'500px', margin: '20px 20px'}}>
          {this.createSmallDiv()}
      </div>
    );
  }
}

export default AnimatedColor;
