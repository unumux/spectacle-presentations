import React from "react";
import {
  Heading,
  Slide,
  Text,
} from "spectacle";

export default class CarlSlide extends React.Component {
  render() {
    return (
        <Slide>
            <Heading>Carl's Slide!</Heading>
            <Text>Not much happening here...</Text>
            <div>We also don't have to use the built in stuff</div>
        </Slide>
    );
  }
}
