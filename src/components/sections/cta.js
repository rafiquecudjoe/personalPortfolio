import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledCTASection = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 80px 0;

  .cta-container {
    background: linear-gradient(135deg, var(--green) 0%, var(--green-tint) 100%);
    padding: 60px 40px;
    border-radius: var(--border-radius);
    text-align: center;
    color: var(--navy);
    position: relative;
    overflow: hidden;

    @media (max-width: 768px) {
      padding: 40px 30px;
    }

    @media (max-width: 480px) {
      padding: 30px 20px;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="rgba(10,25,47,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
      opacity: 0.3;
      pointer-events: none;
    }
  }

  .cta-content {
    position: relative;
    z-index: 1;
  }

  .cta-badge {
    display: inline-block;
    background: rgba(10, 25, 47, 0.1);
    color: var(--navy);
    padding: 8px 16px;
    border-radius: 20px;
    font-size: var(--fz-xs);
    font-weight: 600;
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .cta-title {
    font-size: clamp(var(--fz-xl), 5vw, var(--fz-heading));
    font-weight: 700;
    margin-bottom: 20px;
    line-height: 1.2;
  }

  .cta-description {
    font-size: var(--fz-lg);
    margin-bottom: 40px;
    opacity: 0.9;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
  }

  .cta-buttons {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;

    @media (max-width: 480px) {
      flex-direction: column;
      align-items: center;
      gap: 15px;
    }
  }

  .cta-button {
    padding: 15px 30px;
    border-radius: var(--border-radius);
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;

    &.primary {
      background: var(--navy);
      color: var(--green);
      border: 2px solid var(--navy);

      &:hover {
        background: var(--dark-navy);
        transform: translateY(-2px);
        box-shadow: 0 10px 30px rgba(10, 25, 47, 0.3);
      }
    }

    &.secondary {
      background: transparent;
      color: var(--navy);
      border: 2px solid var(--navy);

      &:hover {
        background: var(--navy);
        color: var(--green);
        transform: translateY(-2px);
      }
    }
  }

  .cta-stats {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-top: 40px;
    padding-top: 30px;
    border-top: 1px solid rgba(10, 25, 47, 0.2);

    @media (max-width: 600px) {
      gap: 20px;
      flex-wrap: wrap;
    }

    @media (max-width: 480px) {
      flex-direction: column;
      gap: 15px;
    }
  }

  .stat-item {
    text-align: center;

    .stat-number {
      display: block;
      font-size: var(--fz-xl);
      font-weight: 700;
      color: var(--navy);
      margin-bottom: 5px;
    }

    .stat-label {
      font-size: var(--fz-xs);
      font-weight: 500;
      opacity: 0.8;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  }
`;

const CTA = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledCTASection ref={revealContainer}>
      <div className="cta-container">
        <div className="cta-content">
          <div className="cta-badge">💼 Professional Development Services</div>

          <h2 className="cta-title">Ready to Build Something Amazing?</h2>

          <p className="cta-description">
            Let's discuss your project and turn your ideas into powerful, scalable solutions. From
            fintech platforms to enterprise applications, I deliver results that drive business
            growth.
          </p>

          <div className="cta-buttons">
            <a
              href="mailto:rafiqueacudjoe@gmail.com?subject=Project Inquiry&body=Hi Rafique, I'd like to discuss a project with you."
              className="cta-button primary">
              Start Your Project
            </a>
            <a
              href="/Rafique_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button secondary">
              View My Resume
            </a>
          </div>

          <div className="cta-stats">
            <div className="stat-item">
              <span className="stat-number">48hrs</span>
              <span className="stat-label">Response Time</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </StyledCTASection>
  );
};

export default CTA;
