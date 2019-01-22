import React from 'react';

import Styles from './styles.module.scss';

const BlogPostItem = ({ title, excerpt, date, readTime }) => {
    return (
        <div className={ Styles.postItem }>
            <h1>{ title }</h1>
            <p className={ Styles.excerpt }>{ excerpt }</p>
            <p className={ Styles.date }>{ date } &nbsp;<span>•</span>&nbsp; { readTime } mins read </p>
        </div>
    )
}

export default BlogPostItem;