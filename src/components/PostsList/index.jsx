import React from 'react';

import Styles from './styles.module.scss';
import BlogPostItem from '../BlogPostItem';

const PostsList = ({children}) => {
    return (
        <div className={Styles.blogList}>
            <BlogPostItem
                title="Hello World!"
                excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                date="07-11-2019"
                readTime="5"/>
            <BlogPostItem
                title="Using Gatsby with CSS Modules and SCSS"
                excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                date="07-11-2019"
                readTime="5"/>
            <BlogPostItem 
                title="How a Business Leader Can Think Like a Futurist"
                excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                date="07-11-2019"
                readTime="5" />
        </div>
    )
}

export default PostsList;