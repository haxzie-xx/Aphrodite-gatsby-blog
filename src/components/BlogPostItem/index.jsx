import React from 'react';
import Link from 'gatsby-link';

import Styles from './styles.module.scss';

const BlogPostItem = ({ path, title, excerpt, date, readTime }) => {
    return (
        <div className={ Styles.postItem }>
            <Link to={ path } ><h1>{ title }</h1></Link>
            <p className={ Styles.excerpt }>{ excerpt }</p>
            <p className={ Styles.date }>{ date } &nbsp;<span>•</span>&nbsp; { readTime } mins read </p>
        </div>
    )
}

export default BlogPostItem;