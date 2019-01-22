import React from 'react';
import Styles from './styles.module.scss';

const FullWidthContainer = ({ children }) => {
    return (
        <div className={ Styles.container }> { children } </div>
    );
}

export default FullWidthContainer;