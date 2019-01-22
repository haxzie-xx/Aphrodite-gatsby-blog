import React from 'react';

import Styles from './styles.module.scss';
import Container from '../Container';

const Footer = ({}) => {
    return (
        <footer class={ Styles.footer }>
            <Container>
            <a href="https://github.com/haxzie">haxzie</a> © {new Date().getFullYear()}, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
            </Container>
        </footer>
    );
}

export default Footer;