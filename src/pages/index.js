import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Layout,
  Hero,
  About,
  Jobs,
  Featured,
  Services,
  Technologies,
  Stats,
  Blog,
  CTA,
  Contact,
} from '@components';
import { getJobs, getFeatured } from '@lib/content';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage = ({ jobs, featured }) => (
  <Layout>
    <StyledMainContainer className="fillHeight">
      <Hero />
      <About />
      <Technologies />
      <Jobs jobs={jobs} />
      <Stats />
      <Services />
      <Blog />
      <Featured featured={featured} />
      <CTA />
      <Contact />
    </StyledMainContainer>
  </Layout>
);

IndexPage.propTypes = {
  jobs: PropTypes.arrayOf(PropTypes.object).isRequired,
  featured: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default IndexPage;

export async function getStaticProps() {
  return {
    props: {
      jobs: getJobs(),
      featured: getFeatured(),
    },
  };
}
