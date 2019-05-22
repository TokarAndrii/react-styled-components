import React from 'react';
import './App.css';
import Button from './Button';
import Header from './Header';
import Footer from './Footer'
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import backgroundImage from './balloons-flight.jpg';


const theme = {
  COLOR: "white",
  BACKGROUND: "#3232ff",
  FONT_SIZE: '32',
  HOVER_BTN: 'olive',
  HEADER_BG: '#282c34',
  HEADER_COL: "white",
  HEADER_APP_LINK: '#61dafb',
  APP_DG_IMAGE: backgroundImage,
  MAIN_HEIGHT: '2790',
  FONT: 'Lobster',
  FONT_FAMILY: 'cursive',
  FOOTER_BG_COLOR: 'grey'
};

const Main = styled.main`
  padding: 32px 0;
  background: url(${props => props.theme.APP_DG_IMAGE}) no-repeat;
  background-size: contain;
  height: ${props => props.theme.MAIN_HEIGHT}px;
  color: ${props => props.theme.COLOR};
  text-transform: capitalize;
  font-family: ${props => props.theme.FONT}, ${props => props.theme.FONT_FAMILY};
  font-size: ${props => props.theme.FONT_SIZE}px;

  @media (max-width: 1800px){
    height: 90vw;
    width: 100%;
    background-size: cover;
    background-position: 0 -200px ;
  }
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
        <Button text="Second button with styled component"></Button>
        <Footer></Footer>
      </div >
    </ThemeProvider>
  );
}

export default App;
