import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';

const Header = ({ className, children }) => (

    <header className={className}>
        <a

            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
            Switch themes
        </a>
        <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
        <img src={logo} className="App-logo" alt="logo" />

        {children}
    </header>
);

const StyledHeader = styled(Header)`
    background-color: ${props => props.theme.HEADER_BG};
    font-size: ${props => props.theme.FONT_SIZE}px;
    color: ${props => props.theme.COLOR};
    min-height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 64px;
    font-family: ${props => props.theme.FONT}, ${props => props.theme.FONT_FAMILY};
    a {
        color: ${props => props.theme.HEADER_APP_LINK};
        text-decoration: none;
    }

    select{
        padding: 2px;
        font-size: ${props => props.theme.FONT_SIZE}px;
        background-color:  ${props => props.theme.HEADER_BG};
        color: ${props => props.theme.COLOR};
    }
`;

export default StyledHeader;