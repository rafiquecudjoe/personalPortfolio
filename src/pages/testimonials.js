import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Layout } from '@components';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import { Helmet } from 'react-helmet';

const StyledTestimonialsSection = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 100px 0;

  @media (max-width: 768px) {
    padding: 80px 0;
  }

  @media (max-width: 480px) {
    padding: 60px 0;
  }

  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 25px;
    margin-top: 50px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 20px;
    }
  }

  .testimonial-card {
    ${({ theme }) => theme.mixins.boxShadow};
    background-color: var(--light-navy);
    padding: 25px;
    border-radius: var(--border-radius);
    transition: var(--transition);

    &:hover {
      transform: translateY(-5px);
    }

    @media (max-width: 480px) {
      padding: 20px;
    }
  }

  .testimonial-text {
    font-style: italic;
    margin-bottom: 20px;
    color: var(--slate);
    font-size: var(--fz-lg);

    @media (max-width: 768px) {
      font-size: var(--fz-md);
    }
  }

  .client-info {
    display: flex;
    align-items: center;

    // Add a placeholder for potential avatar
    &:before {
      content: '';
      display: block;
      width: 3px;
      height: 36px;
      background-color: var(--green);
      margin-right: 15px;
      border-radius: 3px;
    }
  }

  .client-name {
    color: var(--lightest-slate);
    font-weight: 600;
  }

  .client-role {
    color: var(--green);
    font-size: var(--fz-sm);
    margin-top: 5px;
  }

  .client-company {
    color: var(--light-slate);
    font-size: var(--fz-sm);
  }
`;

const TestimonialsPage = ({ location }) => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const testimonials = [
    {
      text: 'Rafique delivered our project ahead of schedule and exceeded our expectations. His technical expertise and problem-solving skills were invaluable to our team.',
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'Tech Innovations Ltd',
    },
    {
      text: 'Working with Rafique was a pleasure. He understood our requirements quickly and implemented solutions that were both elegant and efficient.',
      name: 'Michael Chen',
      role: 'CTO',
      company: 'StartUp Ventures',
    },
    {
      text: 'Our payment integration project was complex, but Rafique navigated the challenges expertly. His knowledge of financial APIs and attention to security details was impressive.',
      name: 'Aisha Mensah',
      role: 'Finance Director',
      company: 'Global Payments Inc.',
    },
    {
      text: 'Rafique not only built our application but also provided valuable insights to improve our business processes. He\'s more than a developer - he\'s a technical consultant.',
      name: 'David Osei',
      role: 'Founder',
      company: 'AfriTech Solutions',
    },
    {
      text: 'The microservice architecture Rafique designed for us has scaled beautifully as our user base grew. His forward-thinking approach saved us from major refactoring down the line.',
      name: 'Lisa Nyarko',
      role: 'Engineering Lead',
      company: 'ScaleUp Technologies',
    },
    {
      text: 'I\'ve worked with many developers, but Rafique stands out for his communication skills and reliability. He kept us informed throughout the project and delivered exactly what we needed.',
      name: 'James Wilson',
      role: 'Project Manager',
      company: 'Digital Transformers',
    },
  ];

  return (
    <Layout location={location}>
      <Helmet title="Testimonials" />

      <StyledTestimonialsSection id="testimonials" ref={revealContainer}>
        <h2 className="numbered-heading">Client Testimonials</h2>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="testimonial-card">
              <p className="testimonial-text">&quot;{testimonial.text}&quot;</p>
              <div className="client-info">
                <div>
                  <div className="client-name">{testimonial.name}</div>
                  <div className="client-role">{testimonial.role}</div>
                  <div className="client-company">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </StyledTestimonialsSection>
    </Layout>
  );
};

TestimonialsPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default TestimonialsPage;
