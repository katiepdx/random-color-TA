import React, { Component } from 'react';
import Display from '../components/app/color/Display';
import { getRandomColor } from '../utils';

export default class ColorPicker extends Component {
  state = {
    bgColor: 'red',
    colors: ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'black', 'white', 'grey']
  };

  componentDidMount() {
    // every one second
    setInterval(() => {
      // get random color
      const randomColor = getRandomColor(this.state.colors) || bgColor;

      // update color in state
      this.setState({
        bgColor: randomColor
      });
    }, 1000);
  }

  render() {
    const { bgColor } = this.state;

    return (
      <div>
        <Display bgColor={bgColor} />
      </div>
    );
  }
}
