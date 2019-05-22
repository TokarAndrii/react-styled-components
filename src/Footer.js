import React from 'react';
import styled from 'styled-components';

const Footer = ({ className }) => (
    <footer className={className}>Footer</footer>
);

const StyledFooter = styled(Footer)`
    background-color: ${props => props.theme.FOOTER_BG_COLOR};
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.COLOR};
    font-size: ${props => props.theme.FONT_SIZE}px;
`
export default StyledFooter;
