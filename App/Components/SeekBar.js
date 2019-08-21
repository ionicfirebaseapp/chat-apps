import React, { Component } from 'react';
import {

  Text,
  View,
  Slider
} from 'react-native';
import styles from "./styles";
import { Color } from '../Common/Color';

class SeekBar extends Component {
  constructor(props) {
    super(props)
    this.state = { slide: 0 }
  }
  //   getVal(val){
  //   console.warn(val);
  //   }     
  render() {
    const { sliderContainer, seekbar } = styles;
    return (
      <View style={[sliderContainer, this.props.style]}>
        <Slider
          style={seekbar}
          step={1}
          minimumValue={0}
          maximumValue={100}
          value={this.state.slide}
          thumbTintColor={Color.White}
          onValueChange={val => this.setState({ slide: val })}
          minimumTrackTintColor={Color.White}
        // onSlidingComplete={ val => this.getVal(val)}
        />

      </View>
    );
  }
}

export { SeekBar };