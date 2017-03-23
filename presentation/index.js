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
  CodePane,
  Appear
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

// IMPORT EVERYONE HERE!
import CarlSlide from "./carl";

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
         <Slide bgColor="primary">
            <Heading fit>
                Everyone build a slide!
            </Heading>
            <List>
                <Appear>
                    <ListItem>Clone the repo at https://github.com/unumux/spectacle-presentations</ListItem>
                </Appear>
                <Appear>                
                    <ListItem>Create a file in the presentation folder named YOURNAME.js</ListItem>
                </Appear>
                <Appear>
                    <ListItem>Import your component like I did on line 26 of this file</ListItem>
                </Appear>
                <Appear>
                    <ListItem>Use the component like I used it on line 90</ListItem>
                </Appear>
            </List>
         </Slide>
         <Slide bgColor="primary">
            <Heading>
                Documentation
            </Heading>
            <Text fit>
                http://formidable.com/open-source/spectacle/docs/basic-concepts/
            </Text>
         </Slide>
         <CarlSlide />
      </Deck>
    );
  }
}
