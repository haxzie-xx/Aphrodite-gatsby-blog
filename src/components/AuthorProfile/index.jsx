import React from 'react';
import {StaticQuery, graphql} from 'gatsby'

import Styles from './styles.module.scss';

import TwitterLogo from '../../images/twitter-logo-silhouette.svg';
import LinkedInLogo from '../../images/linkedin-logo.svg';
import GitHubLogo from '../../images/github-logo.svg';


function getGhProfilePic(username) {
    return `https://avatars.githubusercontent.com/${username}`;
}

const AuthorProfile = ({}) => {

    return (
        <StaticQuery
            query={graphql ` query SiteAuthorQuery { site { siteMetadata { about { name, bio, github, linkedin } } } } `}
            render={data => {
                let userData = data.site.siteMetadata.about;
                return (
                    <div className={Styles.authorLayout}>
                        <div className={ Styles.contents }>
                            <p className={ Styles.caption }>ABOUT US</p>
                            <p className={ Styles.intro }>Hi there! <br/> I am <a href={ `https://github.com/${userData.github}` }>{ userData.name }</a>!</p>
                            <p className={ Styles.bio }>{ userData.bio }</p>
                            <div className={ Styles.social }>
                                <a href={ `https://twitter.com/${userData.twitter}`} ><img src={ TwitterLogo } alt="twitter"/></a>
                                
                            </div>
                        </div>
                    </div>
                );
        }}/>
    );
}

export default AuthorProfile;