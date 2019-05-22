import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';

const Header = ({ className }) => (
    <header className={className}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Edit <code>src/App.js</code> and save to reload.
    </p>
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
            Learn React
  </a>
    </header>
);

const StyledHeader = styled(Header)`
    background-color: ${props => props.theme.HEADER_BG};
    font-size: ${props => props.theme.FONT_SIZE}px;
    color: ${props => props.theme.COLOR};
    background-color: #282c34;
    min-height: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    font-family: ${props => props.theme.FONT}, ${props => props.theme.FONT_FAMILY};
    a {
        color: ${props => props.theme.HEADER_APP_LINK}; 
    }
`;

export default StyledHeader;