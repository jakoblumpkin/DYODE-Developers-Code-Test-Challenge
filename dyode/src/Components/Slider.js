import React from 'react';
//import Sliderimg1 from '../images/slider1.png';

class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.sliderChange = this.sliderChange.bind(this);
  }

  componentDidMount() {
      document.querySelectorAll(".dot div")[0].style.backgroundColor = "white";
    }
  
  convertDotsWhite() {
    for(var i = 0; i < 3; i++) {
      document.querySelectorAll(".dot div")[i].style.backgroundColor = "rgb(164 156 162)";
    }
  }

  sliderChange(e) {
    this.convertDotsWhite();
    var dotClicked = e.target.id;
    var slider = document.querySelector("#slider");

    switch(dotClicked) {
      case '0':
        document.querySelectorAll(".dot div")[0].style.backgroundColor = "white";
        slider.classList = ["slider1"];
        break;
      case '1':
        document.querySelectorAll(".dot div")[1].style.backgroundColor = "white";
        slider.classList = ["slider2"];
        break;
      case '2':
        document.querySelectorAll(".dot div")[2].style.backgroundColor = "white";
        slider.classList = ["slider3"];
        break;
      default:
       
    }


  }

  render() {
  return (
    <div className="slider1" id="slider">
        <div className="dot">{
        [0,1,2].map((i) => (
          <div key={i} id={i} onClick={this.sliderChange} class="slide1">

          </div>
        ))
        }
        </div>
    </div>
  );
  }
  }

export default Slider;