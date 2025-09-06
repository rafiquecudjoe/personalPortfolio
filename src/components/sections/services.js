import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledServicesSection = styled.section`
  max-width: 900px;

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 25px;
    margin-top: 50px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 20px;
    }
  }

  .service-card {
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

  .service-icon {
    font-size: 2rem;
    margin-bottom: 15px;
    display: block;
  }

  .service-title {
    color: var(--lightest-slate);
    font-size: var(--fz-xl);
    font-weight: 600;
    margin-bottom: 15px;
  }

  .service-description {
    color: var(--slate);
    margin-bottom: 20px;
  }

  .service-features {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      color: var(--slate);
      font-size: var(--fz-sm);
      margin-bottom: 8px;
      padding-left: 15px;
      position: relative;

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
      }
    }
  }
`;

const Services = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const services = [
    {
      icon: '🚀',
      title: 'Full-Stack Development',
      description:
        'End-to-end web application development with modern frameworks and scalable architectures.',
      features: [
        'React/Next.js Frontend',
        'Node.js/NestJS Backend',
        'Database Design & Optimization',
        'API Development & Integration',
      ],
    },
    {
      icon: '💰',
      title: 'Fintech Solutions',
      description: 'Specialized in cryptocurrency, payments, and financial technology platforms.',
      features: [
        'Payment Gateway Integration',
        'Cryptocurrency Platforms',
        'Financial Data Processing',
        'Regulatory Compliance',
      ],
    },
    {
      icon: '⚡',
      title: 'Performance Optimization',
      description:
        'Improving application speed, scalability, and user experience through technical optimization.',
      features: [
        'Code Splitting & Lazy Loading',
        'Database Query Optimization',
        'Caching Strategies',
        'CDN Implementation',
      ],
    },
    {
      icon: '🔧',
      title: 'API Development',
      description: 'Building robust, secure, and well-documented APIs for seamless integrations.',
      features: [
        'RESTful API Design',
        'GraphQL Implementation',
        'Authentication & Security',
        'Documentation & Testing',
      ],
    },
    {
      icon: '📱',
      title: 'Mobile Development',
      description:
        'Cross-platform mobile applications with React Native and modern mobile technologies.',
      features: [
        'React Native Apps',
        'iOS & Android Support',
        'App Store Deployment',
        'Mobile UI/UX Design',
      ],
    },
    {
      icon: '🛠️',
      title: 'Technical Consulting',
      description:
        'Architecture reviews, code audits, and technical strategy for growing businesses.',
      features: [
        'Code Review & Auditing',
        'Architecture Planning',
        'Technology Stack Selection',
        'Performance Analysis',
      ],
    },
  ];

  return (
    <StyledServicesSection id="services" ref={revealContainer}>
      <h2 className="numbered-heading">What I Do</h2>

      <div className="services-grid">
        {services.map((service, i) => (
          <div key={i} className="service-card">
            <span className="service-icon">{service.icon}</span>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <ul className="service-features">
              {service.features.map((feature, j) => (
                <li key={j}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </StyledServicesSection>
  );
};

export default Services;
