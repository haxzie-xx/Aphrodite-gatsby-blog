import React from 'react';

import Styles from './styles.module.scss';
import image from '../../images/vacation.png';

const FeaturedView = ({ title, author, date }) => {

    return (
        <div className={ Styles.flexBox }>
            <div className={ Styles.typography }>
                <p className={ Styles.caption }>FEATURED</p>
                <h1>{ title }</h1>
                <p className={ Styles.description }>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className={ Styles.date }> 07-11-2019 &nbsp;<span>•</span>&nbsp; 5 mins read </p>
            </div>
            <div className={ Styles.image }>
                <img src={image}/>
                <p  className={ Styles.caption }>Image by blah blah blh</p>
            </div>
        </div>
    )
}

export default FeaturedView;