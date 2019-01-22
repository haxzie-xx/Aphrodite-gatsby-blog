import React from 'react';

import Styles from './styles.module.scss';
import PostsList from '../PostsList';

const HomeLayout = ({ data }) => {
    return (
        <div className={ Styles.homeLayout }>
            <div className={ Styles.posts }>
                <p className={ Styles.caption }>LATEST POSTS</p>
                <PostsList/>
            </div>
            
        </div>
    );
}

export default HomeLayout;