import React from 'react';
import Img from 'gatsby-image';

import Styles from './styles.module.scss';
import image from '../../images/vacation.png';

const FeaturedView = ({ title, author, excerpt, date }) => {

    return (
        <div className={ Styles.flexBox }>
            <div className={ Styles.typography }>
                <p className={ Styles.caption }>FEATURED</p>
                <h1>{ title }</h1>
                <p className={ Styles.description }>
                    { excerpt }
                </p>
                <p className={ Styles.date }> 07-11-2019 &nbsp;<span>•</span>&nbsp; 5 mins read </p>
            </div>
            <div className={ Styles.image }>
                <Img src={image} alt="featured_image"/>
                <p  className={ Styles.caption }>Image by blah blah blh</p>
            </div>
        </div>
    )
}

export default FeaturedView;