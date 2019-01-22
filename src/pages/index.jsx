import React from 'react'

import Layout from '../components/Layout'
import FeaturedView from '../components/FeaturedView';
import Container from '../components/Container';
import FullWidthContainer from '../components/FullWidthContainer';
import HomeLayout from '../components/HomeLayout';

const IndexPage = () => (
  <Layout>
    <FullWidthContainer>
      <FeaturedView
        title="Gloria Borger from Pew News Talks about Racism"
      />
    </FullWidthContainer>
    <Container>
      <HomeLayout/>
    </Container>
  </Layout>
)

export default IndexPage
