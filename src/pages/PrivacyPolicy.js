import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <h1>Privacy Policy</h1>
      <p><strong>Effective Date:</strong> June 7, 2025</p>
      <p><strong>Last Updated:</strong> June 7, 2025</p>

      <section>
        <h2>1. Data Collection</h2>
        <p>
          Verca does not collect or sell any personal data from users browsing our website. We respect your privacy and do not use tracking cookies, ad networks, or third-party analytics on this site.
        </p>
      </section>

      <section>
        <h2>2. App Usage and Account Information</h2>
        <p>
          The only data collected is limited to information voluntarily submitted by users when using our mobile application—such as updating profile details or using vouchers to redeem goods and services.
        </p>
      </section>

      <section>
        <h2>3. Use of Collected Information</h2>
        <p>
          Any data submitted within the app is used solely for enabling account management, facilitating transactions, and improving the in-app experience. We do not use your information for advertising or marketing purposes.
        </p>
      </section>

      <section>
        <h2>4. Data Sharing</h2>
        <p>
          We do not sell or share your personal information with third parties. Data may only be shared with service providers to operate essential features of the app, or if required by law enforcement under legal obligations.
        </p>
      </section>

      <section>
        <h2>5. Changes to This Policy</h2>
        <p>
          We may update this policy to reflect changes in our services or legal requirements. When we do, we will update the effective date at the top of this page.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
