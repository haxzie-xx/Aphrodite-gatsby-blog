import React from 'react';

import Styles from './styles.module.scss';
import PostsList from '../PostsList';
import AuthorProfile from '../AuthorProfile';

const HomeLayout = ({ data }) => {

    return (
        <div className={ Styles.homeLayout }>
            <div className={ Styles.posts }>
                <p className={ Styles.caption }>LATEST POSTS</p>
                <PostsList posts={ data }/>
            </div>
            <div className={ Styles.news }>
                <AuthorProfile/>
            </div>
        </div>
    );
}

export default HomeLayout;