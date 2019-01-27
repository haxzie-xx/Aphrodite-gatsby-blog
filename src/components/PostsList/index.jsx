import React from 'react';

import Styles from './styles.module.scss';
import BlogPostItem from '../BlogPostItem';

function getPosts(posts) {
    let postCards = [];
    for( let i = 0; i < posts.length; i++) {
        postCards.push(
            <BlogPostItem
                key={i}
                path={ posts[i].frontmatter.path}
                title={posts[i].frontmatter.title}
                excerpt={ posts[i].excerpt }
                date={ posts[i].frontmatter.date }
                readTime={ posts[i].frontmatter.read_time }/>
        )
    }

    return postCards;
}

const PostsList = ({ posts }) => {
    return (
        <div className={Styles.blogList}>
            { getPosts(posts) }
        </div>
    )
}

export default PostsList;