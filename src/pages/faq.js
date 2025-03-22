import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import { Layout } from '@components';
import { Helmet } from 'react-helmet';

const StyledFAQSection = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 100px 0;

  .faq-item {
    margin-bottom: 30px;
  }

  .faq-question {
    color: var(--green);
    font-weight: 600;
    font-size: var(--fz-lg);
    margin-bottom: 10px;
  }

  .faq-answer {
    color: var(--slate);
  }
`;

const FAQPage = ({ location }) => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const faqItems = [
    {
      question: 'What services do you offer?',
      answer:
        'I specialize in full-stack web development, mobile app development, and API integrations. My expertise includes building robust backend systems, responsive frontend interfaces, and connecting systems through well-designed APIs.',
    },
    {
      question: 'What technologies do you work with?',
      answer:
        'I work primarily with JavaScript/TypeScript ecosystems including React, React Native, Node.js, and NestJS. For databases, I have experience with MySQL, PostgreSQL, MongoDB, and Firestore. I also have experience with GraphQL, REST API design, and various payment integrations.',
    },
    {
      question: 'How do you handle project pricing?',
      answer:
        'Project pricing depends on scope, complexity, and timeline. I offer both hourly rates and fixed project quotes. After an initial consultation to understand your needs, I provide a detailed proposal outlining deliverables, timeline, and cost structure.',
    },
    {
      question: 'What is your development process?',
      answer:
        'My development process typically includes requirement gathering, planning, design, development, testing, deployment, and maintenance. I emphasize good communication throughout the process with regular updates and milestone reviews.',
    },
    {
      question: 'How long does a typical project take?',
      answer:
        'Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while complex web applications or mobile apps might take 2-6 months. I provide timeline estimates during the proposal phase after understanding your specific requirements.',
    },
    {
      question: 'Do you offer maintenance services after project completion?',
      answer:
        'Yes, I offer ongoing maintenance and support services for completed projects. This can include bug fixes, security updates, performance optimization, and feature enhancements. We can discuss maintenance packages that fit your needs and budget.',
    },
  ];

  return (
    <Layout location={location}>
      <Helmet title="FAQ" />

      <StyledFAQSection id="faq" ref={revealContainer}>
        <h2 className="numbered-heading">Frequently Asked Questions</h2>

        <div className="faq-container">
          {faqItems.map((item, i) => (
            <div key={i} className="faq-item">
              <h3 className="faq-question">{item.question}</h3>
              <p className="faq-answer">{item.answer}</p>
            </div>
          ))}
        </div>
      </StyledFAQSection>
    </Layout>
  );
};

FAQPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default FAQPage;
