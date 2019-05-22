import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';

const Header = ({ className }) => (
    
    <header className={className}>
        <a
    
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
            Learn React
        </a>
        <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
        <img src={logo} className="App-logo" alt="logo" />
    </header>
);

const StyledHeader = styled(Header)`
    background-color: ${props => props.theme.HEADER_BG};
    font-size: ${props => props.theme.FONT_SIZE}px;
    color: ${props => props.theme.COLOR};
    background-color: #282c34;
    min-height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    padding: 0 64px;
    font-family: ${props => props.theme.FONT}, ${props => props.theme.FONT_FAMILY};
    a {
        color: ${props => props.theme.HEADER_APP_LINK}; 
    }
`;

export default StyledHeader;