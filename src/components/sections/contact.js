import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig, email } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }

  .contact-details {
    margin-top: 30px;
    text-align: center;
  }

  .contact-item {
    margin: 10px 0;
    color: var(--slate);

    strong {
      color: var(--lightest-slate);
      margin-right: 10px;
    }
  }
`;

const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="numbered-heading overline">What's Next?</h2>

      <h2 className="title">Get In Touch</h2>

      <p>
        I am currently looking for new opportunities, my inbox is always open. Whether you have a
        question or just want to say hi, I'll try my best to get back to you!
      </p>

      <div className="contact-details">
        <div className="contact-item">
          <strong>Email:</strong> rafiqueacudjoe@gmail.com
        </div>
        <div className="contact-item">
          <strong>Phone:</strong> +233 5444 13229
        </div>
        <div className="contact-item">
          <strong>Location:</strong> Accra, Ghana
        </div>
        <div className="contact-item">
          <strong>Business Hours:</strong> Monday-Friday, 9AM-5PM GMT
        </div>
      </div>

      <a className="email-link" href={`mailto:${email}`}>
        Say Hello
      </a>
    </StyledContactSection>
  );
};

export default Contact;
