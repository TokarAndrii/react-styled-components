import React, { useState, useEffect } from 'react';
import './App.css';
import Button from './Button';
import Header from './Header';
import Footer from './Footer'
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import backgroundImage from './balloons-flight.jpg';
import backgroundImage2 from './architecture-buildings-business.jpg';
import backgroundImage3 from './architectural-design.jpg';

const THEME_DEFAULT = 'themeDefault';
const THEME_LIGHT = 'themeLight';
const THEME_SOLARIZED = 'themeSolarized';



const themeDefault = {
  COLOR: "white",
  BACKGROUND: "black",
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


const themeLight = {
  COLOR: "black",
  BACKGROUND: "white",
  FONT_SIZE: '32',
  HOVER_BTN: 'olive',
  HEADER_BG: 'white',
  HEADER_COL: "black",
  HEADER_APP_LINK: 'blue',
  APP_DG_IMAGE: backgroundImage2,
  MAIN_HEIGHT: '2300',
  FONT: 'Acme',
  FONT_FAMILY: 'sans-serif',
  FOOTER_BG_COLOR: 'white'
};

const themeSolarized = {
  COLOR: "#d33682",
  BACKGROUND: "#008f68",
  FONT_SIZE: '32',
  HOVER_BTN: 'olive',
  HEADER_BG: '#008f68',
  HEADER_COL: "white",
  HEADER_APP_LINK: 'blue',
  APP_DG_IMAGE: backgroundImage3,
  MAIN_HEIGHT: '2560',
  FONT: 'Poiret One',
  FONT_FAMILY: 'cursive',
  FOOTER_BG_COLOR: '#fdf6e3'
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
  const [theme, setTheme] = useState(themeDefault);
  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  const handleChangeTheme = ({ target }) => {
    const { value } = target;
    switch (value) {
      case THEME_DEFAULT:
      default:
        return setTheme(themeDefault);

      case THEME_LIGHT: return setTheme(themeLight);
      case THEME_SOLARIZED: return setTheme(themeSolarized);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header theme={theme}>
          <select onChange={handleChangeTheme}>
            <option value={THEME_DEFAULT}>dark</option>
            <option value={THEME_LIGHT}>light</option>
            <option value={THEME_SOLARIZED}>solarized</option>
          </select>
        </Header>
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
