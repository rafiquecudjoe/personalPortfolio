import React from 'react';
import Link from 'next/link';
import kebabCase from 'lodash/kebabCase';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, Head } from '@components';
import { getAllTags, getPostsByTag } from '@lib/content';

const StyledTagsContainer = styled.main`
  max-width: 1000px;

  a {
    ${({ theme }) => theme.mixins.inlineLink};
  }

  h1 {
    ${({ theme }) => theme.mixins.flexBetween};
    margin-bottom: 50px;

    a {
      font-size: var(--fz-lg);
      font-weight: 400;
    }
  }

  ul {
    li {
      font-size: 24px;
      h2 {
        font-size: inherit;
        margin: 0;
        a {
          color: var(--light-slate);
        }
      }
      .subtitle {
        color: var(--slate);
        font-size: var(--fz-sm);

        .tag {
          margin-right: 10px;
        }
      }
    }
  }
`;

const TagTemplate = ({ tag, posts }) => (
  <Layout>
    <Head title={`Tagged: #${tag}`} />

    <StyledTagsContainer>
      <span className="breadcrumb">
        <span className="arrow">&larr;</span>
        <Link href="/pensieve">All memories</Link>
      </span>

      <h1>
        <span>#{tag}</span>
        <span>
          <Link href="/pensieve/tags">View all tags</Link>
        </span>
      </h1>

      <ul className="fancy-list">
        {posts.map(({ frontmatter }) => {
          const { title, slug, date, tags } = frontmatter;
          return (
            <li key={slug}>
              <h2>
                <Link href={slug}>{title}</Link>
              </h2>
              <p className="subtitle">
                <time>
                  {new Date(date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <span>&nbsp;&mdash;&nbsp;</span>
                {(tags || []).map((t, i) => (
                  <Link key={i} href={`/pensieve/tags/${kebabCase(t)}`} className="tag">
                    #{t}
                  </Link>
                ))}
              </p>
            </li>
          );
        })}
      </ul>
    </StyledTagsContainer>
  </Layout>
);

TagTemplate.propTypes = {
  tag: PropTypes.string.isRequired,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TagTemplate;

export async function getStaticPaths() {
  const tags = getAllTags();
  return {
    paths: tags.map(tag => ({ params: { tag: kebabCase(tag.fieldValue) } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const allTags = getAllTags();
  const match = allTags.find(tag => kebabCase(tag.fieldValue) === params.tag);
  const tag = match ? match.fieldValue : params.tag;

  return {
    props: {
      tag,
      posts: getPostsByTag(tag),
    },
  };
}
