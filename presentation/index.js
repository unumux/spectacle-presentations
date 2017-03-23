// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Slide,
  Text,
  List,
  ListItem,
  CodePane
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {

};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["fade"]} transitionDuration={500} theme={theme}>
        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Presentations
          </Heading>
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            with spectacle
          </Heading>
        </Slide>
        <Slide bgColor="tertiary">
            <Heading size={2} caps textColor="primary">
                Benefits of Spectacle
            </Heading>
            <List>
                <ListItem>Create presentations using JS/React</ListItem>
                <ListItem>Consistent branding via themes</ListItem>
                <ListItem>Collaboration with Git</ListItem>
                <ListItem>Free hosting on Github Pages!</ListItem>
            </List>
        </Slide>
        <Slide bgColor="tertiary">
            <CodePane
                lang="jsx"
                source={require("raw-loader!../assets/deck.example")}
            />
         </Slide>
         <Slide bgColor="tertiary">
            <CodePane
                lang="jsx"
                source={require("raw-loader!../assets/deck.1.example")}
            />
         </Slide>
         <Slide bgColor="tertiary">
            <CodePane
                lang="jsx"
                source={require("raw-loader!../assets/deck.2.example")}
            />
         </Slide>
      </Deck>
    );
  }
}
