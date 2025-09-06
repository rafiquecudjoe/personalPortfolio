import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledTechnologiesSection = styled.section`
  max-width: 1000px;
  margin: 0 auto;

  .tech-intro {
    text-align: center;
    margin-bottom: 50px;

    p {
      color: var(--slate);
      font-size: var(--fz-lg);
      max-width: 600px;
      margin: 0 auto;
    }
  }

  .tech-categories {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    margin-top: 50px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 25px;
    }
  }

  .tech-category {
    background: linear-gradient(135deg, var(--light-navy) 0%, var(--navy) 100%);
    padding: 30px;
    border-radius: var(--border-radius);
    border: 1px solid var(--green-tint);
    transition: var(--transition);

    &:hover {
      transform: translateY(-5px);
      border-color: var(--green);
    }

    .category-header {
      display: flex;
      align-items: center;
      margin-bottom: 20px;

      .category-icon {
        font-size: 2rem;
        margin-right: 15px;
      }

      .category-title {
        color: var(--lightest-slate);
        font-size: var(--fz-xl);
        font-weight: 600;
        margin: 0;
      }
    }

    .tech-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 15px;
    }

    .tech-item {
      background: rgba(100, 255, 218, 0.1);
      padding: 12px 16px;
      border-radius: 8px;
      text-align: center;
      border: 1px solid transparent;
      transition: var(--transition);

      &:hover {
        border-color: var(--green);
        background: rgba(100, 255, 218, 0.15);
      }

      .tech-name {
        color: var(--lightest-slate);
        font-size: var(--fz-sm);
        font-weight: 500;
        margin-bottom: 5px;
      }

      .tech-level {
        color: var(--green);
        font-size: var(--fz-xs);
        font-family: var(--font-mono);
      }
    }
  }

  .certifications {
    margin-top: 60px;
    text-align: center;

    h3 {
      color: var(--lightest-slate);
      margin-bottom: 30px;
    }

    .cert-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin-top: 30px;
    }

    .cert-item {
      background: var(--light-navy);
      padding: 20px;
      border-radius: var(--border-radius);
      border: 1px solid var(--green-tint);

      .cert-name {
        color: var(--lightest-slate);
        font-weight: 600;
        margin-bottom: 8px;
      }

      .cert-issuer {
        color: var(--green);
        font-size: var(--fz-sm);
        font-family: var(--font-mono);
      }
    }
  }
`;

const Technologies = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const techCategories = [
    {
      icon: '⚡',
      title: 'Frontend',
      technologies: [
        { name: 'React', level: 'Expert' },
        { name: 'Next.js', level: 'Advanced' },
        { name: 'TypeScript', level: 'Expert' },
        { name: 'JavaScript', level: 'Expert' },
        { name: 'HTML/CSS', level: 'Expert' },
        { name: 'Gatsby', level: 'Advanced' },
      ],
    },
    {
      icon: '🚀',
      title: 'Backend',
      technologies: [
        { name: 'Node.js', level: 'Expert' },
        { name: 'NestJS', level: 'Expert' },
        { name: 'Express.js', level: 'Advanced' },
        { name: 'GraphQL', level: 'Advanced' },
        { name: 'REST APIs', level: 'Expert' },
        { name: 'RabbitMQ', level: 'Advanced' },
        { name: 'Microservices', level: 'Advanced' },
      ],
    },
    {
      icon: '🗄️',
      title: 'Database',
      technologies: [
        { name: 'PostgreSQL', level: 'Advanced' },
        { name: 'MongoDB', level: 'Advanced' },
        { name: 'MySQL', level: 'Advanced' },
        { name: 'Firestore', level: 'Intermediate' },
        { name: 'Redis', level: 'Intermediate' },
        { name: 'Prisma', level: 'Advanced' },
      ],
    },
    {
      icon: '☁️',
      title: 'DevOps & Cloud',
      technologies: [
        { name: 'Docker', level: 'Advanced' },
        { name: 'AWS', level: 'Intermediate' },
        { name: 'Git', level: 'Expert' },
        { name: 'GitHub Actions', level: 'Advanced' },
        { name: 'Netlify', level: 'Advanced' },
        { name: 'Vercel', level: 'Advanced' },
      ],
    },
  ];

  const certifications = [
    { name: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services' },
    { name: 'React Developer', issuer: 'Meta' },
    { name: 'JavaScript Algorithms', issuer: 'freeCodeCamp' },
    { name: 'Full Stack Development', issuer: 'The Odin Project' },
  ];

  return (
    <StyledTechnologiesSection id="technologies" ref={revealContainer}>
      <h2 className="numbered-heading">Technologies & Tools</h2>

      <div className="tech-intro">
        <p>
          I work with modern technologies and frameworks to build scalable, performant applications.
          Here's my current tech stack and expertise levels.
        </p>
      </div>

      <div className="tech-categories">
        {techCategories.map((category, i) => (
          <div key={i} className="tech-category">
            <div className="category-header">
              <span className="category-icon">{category.icon}</span>
              <h3 className="category-title">{category.title}</h3>
            </div>
            <div className="tech-grid">
              {category.technologies.map((tech, j) => (
                <div key={j} className="tech-item">
                  <div className="tech-name">{tech.name}</div>
                  <div className="tech-level">{tech.level}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="certifications">
        <h3>Certifications & Achievements</h3>
        <div className="cert-grid">
          {certifications.map((cert, i) => (
            <div key={i} className="cert-item">
              <div className="cert-name">{cert.name}</div>
              <div className="cert-issuer">{cert.issuer}</div>
            </div>
          ))}
        </div>
      </div>
    </StyledTechnologiesSection>
  );
};

export default Technologies;
