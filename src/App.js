import React from 'react';
import './App.css';
import Button from './Button';
import Header from './Header';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import backgroundImage from './balloons-flight.jpg';


const theme = {
  COLOR: "white",
  BACKGROUND: "#3232ff",
  FONT_SIZE: '24',
  HOVER_BTN: 'olive',
  HEADER_BG: '#282c34',
  HEADER_COL: "white",
  HEADER_APP_LINK: '#61dafb',
  APP_DG_IMAGE: backgroundImage,
  MAIN_HEIGHT: '2880',
  FONT: 'Lobster',
  FONT_FAMILY: 'cursive'
};

const Main = styled.main`
  padding: 32px 0;
  background: url(${props => props.theme.APP_DG_IMAGE}) no-repeat;
  background-size: contain;
  height: ${props => props.theme.MAIN_HEIGHT}px;
  color: ${props => props.theme.COLOR};
  text-transform: capitalize;
  font-family: ${props => props.theme.FONT}, ${props => props.theme.FONT_FAMILY};
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header></Header>
        <Button text="First button with styled component"></Button>
        <Main>
          this is main
        </Main>
      </div >
    </ThemeProvider>
  );
}

export default App;
