import React, { useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledBlogSection = styled.section`
  max-width: 1000px;
  margin: 0 auto;

  .blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 25px;
    margin-top: 50px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 20px;
    }
  }

  .blog-card {
    ${({ theme }) => theme.mixins.boxShadow};
    background-color: var(--light-navy);
    padding: 25px;
    border-radius: var(--border-radius);
    transition: var(--transition);
    border: 1px solid transparent;

    &:hover {
      transform: translateY(-5px);
      border-color: var(--green-tint);
    }

    @media (max-width: 480px) {
      padding: 20px;
    }
  }

  .blog-title {
    color: var(--lightest-slate);
    font-size: var(--fz-xl);
    font-weight: 600;
    margin-bottom: 10px;
    line-height: 1.3;

    &:hover {
      color: var(--green);
    }
  }

  .blog-description {
    color: var(--slate);
    margin-bottom: 15px;
    line-height: 1.5;
  }

  .blog-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: var(--fz-xs);
    font-family: var(--font-mono);
    color: var(--light-slate);
  }

  .blog-date {
    color: var(--green);
  }

  .blog-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    margin-top: 15px;
  }

  .blog-tag {
    background-color: var(--green-tint);
    color: var(--navy);
    padding: 4px 8px;
    border-radius: 12px;
    font-size: var(--fz-xxs);
    font-weight: 500;
  }

  .view-all {
    text-align: center;
    margin-top: 40px;

    a {
      ${({ theme }) => theme.mixins.bigButton};
    }
  }
`;

const Blog = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  // Sample blog posts - fintech focused (restored)
  const blogPosts = [
    {
      title: 'Building Secure Payment APIs with NestJS',
      description:
        'Architecting compliant, encrypted, idempotent payment API flows with NestJS and message-driven processing.',
      date: 'Sep 2025',
      slug: '/pensieve/secure-payment-apis',
      tags: ['NestJS', 'Fintech', 'Security', 'APIs'],
    },
    {
      title: 'Microservices Architecture for African Fintech',
      description:
        'Designing resilient, latency-aware microservices that orchestrate multi-rail payments across African markets.',
      date: 'Sep 2025',
      slug: '/pensieve/microservices-african-fintech',
      tags: ['Microservices', 'Architecture', 'Fintech', 'Scale'],
    },
    {
      title: 'Real-time Trading Platform Development',
      description:
        'Engineering low-latency trading & market data pipelines with WebSockets, Redis caching, and RabbitMQ event flows.',
      date: 'Sep 2025',
      slug: '/pensieve/realtime-trading-platform',
      tags: ['Trading', 'Performance', 'WebSockets', 'RabbitMQ'],
    },
  ];

  return (
    <StyledBlogSection id="blog" ref={revealContainer}>
      <h2 className="numbered-heading">Latest Articles</h2>

      {blogPosts && blogPosts.length > 0 ? (
        <>
          <div className="blog-grid">
            {blogPosts.map((post, i) => (
              <div key={i} className="blog-card">
                <Link to={post.slug}>
                  <h3 className="blog-title">{post.title}</h3>
                </Link>
                <p className="blog-description">{post.description}</p>
                <div className="blog-meta">
                  <span className="blog-date">{post.date}</span>
                  <span>Read more →</span>
                </div>
                <div className="blog-tags">
                  {post.tags.slice(0, 3).map((tag, j) => (
                    <span key={j} className="blog-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="view-all">
            <Link to="/pensieve">View All Articles</Link>
          </div>
        </>
      ) : (
        <div style={{ textAlign: 'center', padding: '50px 0' }}>
          <p style={{ color: 'var(--slate)' }}>Blog posts coming soon...</p>
        </div>
      )}
    </StyledBlogSection>
  );
};

export default Blog;
