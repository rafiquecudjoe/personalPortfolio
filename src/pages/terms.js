import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout } from '@components';
import { Helmet } from 'react-helmet';

const StyledTermsSection = styled.section`
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

const TermsPage = ({ location }) => (
  <Layout location={location}>
    <Helmet title="Terms of Service" />

    <StyledTermsSection>
      <h2 className="numbered-heading">Terms of Service</h2>
      <p className="last-updated">Last Updated: March 20, 2025</p>

      <h3>1. Acceptance of Terms</h3>
      <p>
          By accessing and using the services provided by Rafique Cudjoe (&quot;Service&quot;), you
          agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to
          these Terms, please do not use the Service.
      </p>

      <h3>2. Description of Service</h3>
      <p>
          The Service provides software development, web development, mobile application
          development, and related consulting services as agreed upon in written contracts between
          Rafique Cudjoe and clients.
      </p>

      <h3>3. Client Responsibilities</h3>
      <p>Clients agree to:</p>
      <ul>
        <li>
            Provide necessary information, credentials, and assets needed for project completion
        </li>
        <li>Review and provide feedback on deliverables in a timely manner</li>
        <li>Pay all agreed-upon fees according to the payment schedule</li>
        <li>
            Obtain all necessary rights and permissions for any content or material provided to
            Rafique Cudjoe
        </li>
      </ul>

      <h3>4. Project Timeline and Deliverables</h3>
      <p>
          Project timelines and deliverables will be outlined in project proposals and contracts.
          While every effort will be made to meet deadlines, Rafique Cudjoe cannot guarantee
          completion dates if delays are caused by client's failure to provide necessary information
          or approvals.
      </p>

      <h3>5. Payment Terms</h3>
      <p>
          Payment terms will be specified in individual project contracts. Typically, projects
          require a deposit before work begins, with remaining payments due at specific milestones
          or upon completion. Late payments may result in work suspension.
      </p>

      <h3>6. Intellectual Property Rights</h3>
      <p>
          Upon full payment, clients will receive rights to the deliverables as specified in the
          project contract. Rafique Cudjoe retains the right to use non-confidential aspects of the
          work for portfolio purposes unless otherwise agreed.
      </p>

      <h3>7. Confidentiality</h3>
      <p>
          Rafique Cudjoe agrees to keep client information confidential and will not disclose
          sensitive business information to third parties without permission.
      </p>

      <h3>8. Limitation of Liability</h3>
      <p>
          Rafique Cudjoe is not liable for indirect, incidental, or consequential damages arising
          from the use of services. Total liability shall not exceed the amount paid by the client
          for the services.
      </p>

      <h3>9. Termination</h3>
      <p>
          Either party may terminate the service agreement with written notice if the other party
          breaches these Terms. Clients are responsible for payment for all work completed prior to
          termination.
      </p>

      <h3>10. Governing Law</h3>
      <p>
          These Terms shall be governed by and construed in accordance with the laws of Ghana,
          without regard to its conflict of law provisions.
      </p>

      <h3>11. Changes to Terms</h3>
      <p>
          Rafique Cudjoe reserves the right to update these Terms at any time. Clients will be
          notified of significant changes.
      </p>

      <h3>12. Contact Information</h3>
      <p>For questions about these Terms, please contact: rafiqueacudjoe@gmail.com</p>
    </StyledTermsSection>
  </Layout>
);

TermsPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default TermsPage;
