import React from 'react';
import Link from 'next/link';
import kebabCase from 'lodash/kebabCase';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, Head } from '@components';
import { getAllPostSlugs, getPostBySlug } from '@lib/content';

const StyledPostContainer = styled.main`
  max-width: 1000px;
`;
const StyledPostHeader = styled.header`
  margin-bottom: 50px;
  .tag {
    margin-right: 10px;
  }
`;
const StyledPostContent = styled.div`
  margin-bottom: 100px;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 2em 0 1em;
  }

  p {
    margin: 1em 0;
    line-height: 1.5;
    color: var(--light-slate);
  }

  a {
    ${({ theme }) => theme.mixins.inlineLink};
  }

  code {
    background-color: var(--lightest-navy);
    color: var(--lightest-slate);
    border-radius: var(--border-radius);
    font-size: var(--fz-sm);
    padding: 0.2em 0.4em;
  }

  pre code {
    background-color: transparent;
    padding: 0;
  }
`;

const PostTemplate = ({ frontmatter, html }) => {
  const { title, date, tags } = frontmatter;

  return (
    <Layout>
      <Head title={title} description={frontmatter.description} />

      <StyledPostContainer>
        <span className="breadcrumb">
          <span className="arrow">&larr;</span>
          <Link href="/pensieve">All memories</Link>
        </span>

        <StyledPostHeader>
          <h1 className="medium-heading">{title}</h1>
          <p className="subtitle">
            <time>
              {new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span>&nbsp;&mdash;&nbsp;</span>
            {(tags || []).map((tag, i) => (
              <Link key={i} href={`/pensieve/tags/${kebabCase(tag)}`} className="tag">
                #{tag}
              </Link>
            ))}
          </p>
        </StyledPostHeader>

        <StyledPostContent dangerouslySetInnerHTML={{ __html: html }} />
      </StyledPostContainer>
    </Layout>
  );
};

PostTemplate.propTypes = {
  frontmatter: PropTypes.object.isRequired,
  html: PropTypes.string.isRequired,
};

export default PostTemplate;

export async function getStaticPaths() {
  const slugs = getAllPostSlugs();
  return {
    paths: slugs.map(slug => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return { notFound: true };
  }

  return {
    props: {
      frontmatter: post.frontmatter,
      html: post.html,
    },
  };
}
