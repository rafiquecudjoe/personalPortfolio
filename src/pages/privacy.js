import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout } from '@components';
import { Helmet } from 'react-helmet';

const StyledPrivacySection = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 100px 0;

  h3 {
    color: var(--lightest-slate);
    margin-top: 40px;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 20px;
  }

  ul {
    padding-left: 20px;
    margin-bottom: 20px;
  }

  .last-updated {
    font-size: var(--fz-sm);
    font-style: italic;
    color: var(--light-slate);
    margin-bottom: 40px;
  }
`;

const PrivacyPage = ({ location }) => (
  <Layout location={location}>
    <Helmet title="Privacy Policy" />

    <StyledPrivacySection>
      <h2 className="numbered-heading">Privacy Policy</h2>
      <p className="last-updated">Last Updated: March 20, 2025</p>

      <h3>1. Introduction</h3>
      <p>
          This Privacy Policy explains how Rafique Cudjoe (&quot;we&quot;, &quot;our&quot;, or
          &quot;us&quot;) collects, uses, and shares information when you use our services or visit
          our website.
      </p>

      <h3>2. Information We Collect</h3>
      <p>We collect the following types of information:</p>
      <ul>
        <li>
          <strong>Personal Information:</strong> Name, email address, phone number, and billing
            information when you engage our services
        </li>
        <li>
          <strong>Project Information:</strong> Details related to your project requirements and
            specifications
        </li>
        <li>
          <strong>Website Usage:</strong> Information about how you interact with our website,
            collected through cookies and similar technologies
        </li>
        <li>
          <strong>Communication:</strong> Records of your correspondence if you contact us
        </li>
      </ul>

      <h3>3. How We Use Your Information</h3>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Provide, maintain, and improve our services</li>
        <li>Process transactions and send related information</li>
        <li>Respond to comments, questions, and requests</li>
        <li>Send technical notices, updates, security alerts, and support messages</li>
        <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
      </ul>

      <h3>4. Sharing of Information</h3>
      <p>We may share your information with:</p>
      <ul>
        <li>Service providers who perform services on our behalf</li>
        <li>Professional advisors, such as lawyers, accountants, and insurers</li>
        <li>Government authorities if required by law</li>
      </ul>
      <p>We do not sell your personal information to third parties.</p>

      <h3>5. Data Security</h3>
      <p>
          We implement reasonable security measures to protect your personal information. However,
          no method of transmission over the Internet or electronic storage is 100% secure, and we
          cannot guarantee absolute security.
      </p>

      <h3>6. Your Rights</h3>
      <p>
          Depending on your location, you may have certain rights regarding your personal
          information, including:
      </p>
      <ul>
        <li>Access to your personal information</li>
        <li>Correction of inaccurate information</li>
        <li>Deletion of your information</li>
        <li>Objection to processing of your information</li>
        <li>Data portability</li>
      </ul>

      <h3>7. Changes to This Privacy Policy</h3>
      <p>
          We may update this Privacy Policy periodically. We will notify you of any significant
          changes by posting the new Privacy Policy on this page.
      </p>

      <h3>8. Contact Us</h3>
      <p>
          If you have questions about this Privacy Policy, please contact us at:
          rafiqueacudjoe@gmail.com
      </p>
    </StyledPrivacySection>
  </Layout>
);

PrivacyPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default PrivacyPage;
