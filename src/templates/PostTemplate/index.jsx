import React from 'react';

import Layout from '../../components/Layout'
import Styles from './styles.module.scss'

export default function PostTemplate({data}) {

    const {markdownRemark} = data // data.markdownRemark holds our post data
    const {frontmatter, html} = markdownRemark

    return (
        <Layout>
            <div className={ Styles.postLayout }>
                <div className={ Styles.blogPost}>
                    <h1>{frontmatter.title}</h1>
                    <p className={ Styles.date }>{frontmatter.date} <span>•</span> 5mins read</p>
                    <div
                        className="blog-post-content"
                        dangerouslySetInnerHTML={{
                        __html: html
                    }}/>
                </div>
            </div>
        </Layout>
    );
}

export const PostQuery = graphql `
  query PostQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }`;