import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledStatsSection = styled.section`
  max-width: 1000px;
  margin: 0 auto;

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 25px;
    margin-top: 50px;

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }
  }

  .stat-card {
    ${({ theme }) => theme.mixins.boxShadow};
    background-color: var(--light-navy);
    padding: 30px 25px;
    border-radius: var(--border-radius);
    text-align: center;
    transition: var(--transition);

    &:hover {
      transform: translateY(-5px);
    }

    @media (max-width: 480px) {
      padding: 25px 20px;
    }
  }

  .stat-number {
    color: var(--green);
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 700;
    margin-bottom: 10px;
    display: block;
  }

  .stat-label {
    color: var(--slate);
    font-size: var(--fz-sm);
    font-family: var(--font-mono);
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .stat-description {
    color: var(--light-slate);
    font-size: var(--fz-xs);
    margin-top: 10px;
    line-height: 1.4;
  }
`;

const Stats = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const stats = [
    {
      number: '50+',
      label: 'Projects Completed',
      description: 'Full-stack applications, APIs, and fintech solutions',
    },
    {
      number: '3+',
      label: 'Years Experience',
      description: 'Professional development in modern tech stacks',
    },
    {
      number: '10K+',
      label: 'Users Served',
      description: 'Through Ejara and other fintech platforms',
    },
    {
      number: '99.9%',
      label: 'Uptime Achieved',
      description: 'Reliable, production-ready applications',
    },
  ];

  return (
    <StyledStatsSection id="stats" ref={revealContainer}>
      <h2 className="numbered-heading">Key Metrics</h2>

      <div className="stats-grid">
        {stats.map((stat, i) => (
          <div key={i} className="stat-card">
            <span className="stat-number">{stat.number}</span>
            <div className="stat-label">{stat.label}</div>
            <div className="stat-description">{stat.description}</div>
          </div>
        ))}
      </div>
    </StyledStatsSection>
  );
};

export default Stats;
