import React from 'react';
import styled from 'styled-components';


const Button = ({ text, onClick, className }) => (
    <button className={className} onClick={onClick}>{text}</button>
);


const StyledButton = styled(Button)`
    padding: 12px 128px;
    margin-top: 32px;
    text-transform: capitalize;
    background-color: ${props => props.theme.BACKGROUND};
    color: ${props => props.theme.COLOR};
    font-size: ${props=> props.theme.FONT_SIZE}px;
    border: 2px solid black;
    font-family: ${props => props.theme.FONT}, ${props => props.theme.FONT_FAMILY};

    :hover {
        background-color: ${props=> props.theme.HOVER_BTN};
      }
`

export default StyledButton;