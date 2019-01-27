import React from 'react'
import { graphql } from 'gatsby';

import Layout from '../components/Layout'
import FeaturedView from '../components/FeaturedView';
import Container from '../components/Container';
import FullWidthContainer from '../components/FullWidthContainer';
import HomeLayout from '../components/HomeLayout';

function getFeaturedPost ( posts ) {
  let featured_post_data = false;
  let all_other_posts = [];

  for (let i = 0; i < posts.length; i++) {
    if ( posts[i].node.frontmatter.featured && !featured_post_data ) {

      featured_post_data = (
        <FullWidthContainer>
          <FeaturedView data={ posts[i].node } />
        </FullWidthContainer>
      );

    } else {
      all_other_posts.push(posts[i].node)
    }
  }

  return {featured_post_data, all_other_posts};

}

const IndexPage = ({ data }) => {

  const { edges: postList } = data.allMarkdownRemark;
  const filteredPosts = getFeaturedPost(postList);
  const featured_post = filteredPosts.featured_post_data;

  return (
    <Layout>
      { featured_post !== false && featured_post }
      <Container>
        <HomeLayout data={ filteredPosts.all_other_posts }/>
      </Container>
    </Layout>
  );
}

export default IndexPage

export const blogListQuery = graphql`
query blogsQuery {
  allMarkdownRemark (
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { fileAbsolutePath: { regex: "/blog/posts/.*md$/" } }
    ){
    edges {
      node {
        excerpt(pruneLength: 200)
        frontmatter {
          path,
          title,
          read_time,
          date,
          author
        }
      }
    }
  }
}

`
