import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import SwipeableParallaxCarousel from 'react-native-swipeable-parallax-carousel';

const datacarousel = [
    {
        "id": 339964,
        "title": "Valerian and the City of a Thousand Planets",
        "imagePath": "https://image.tmdb.org/t/p/w780/o6OhxtsgMurL4h68Uqei0aSPMNr.jpg",
    },
    {
        "id": 315635,
        "imagePath": "https://image.tmdb.org/t/p/w780/fn4n6uOYcB6Uh89nbNPoU2w80RV.jpg",
    },
    {
        "id": 339403,
        "title": "Baby Driver",
        "subtitle": "More than just a trend",
        "imagePath": "https://image.tmdb.org/t/p/w780/xWPXlLKSLGUNYzPqxDyhfij7bBi.jpg",
    },
  ];

class CarouselScreen extends Component {
  render() {
      return (
        <ScrollView
        ref={(c) => { this.parentScrollView = c; }}
      >
        <SwipeableParallaxCarousel
          data={datacarousel}
          parentScrollViewRef={this.parentScrollView}
        />
      </ScrollView>
      );
  }
}

export {CarouselScreen};