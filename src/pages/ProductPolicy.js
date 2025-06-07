import React from 'react';
import './ProductPolicy.css';

const ProductPolicy = () => {
  return (
    <div className="policy-container">
      <h1 className="policy-title">Product Policy</h1>
      <p className="policy-intro">
        Effective June 5, 2025, all policies regarding the use of vouchers on Verca—including guidelines for eligible products and services, as well as the types of vouchers that may be listed—will be published and maintained on this page.
      </p>

      <div className="policy-section">
        <h2>1 | Physical Goods or Service</h2>
        <p>
          All products and services listed on Verca must be a physical good or service, as per Apple Store guidelines. No vouchers for digital goods may be sold on Verca.
        </p>
      </div>

      <div className="policy-section">
        <h2>2 | Redemption Responsibility</h2>
        <p>
          All vouchers purchased through our platform are offered and fulfilled directly by the respective business. The business owner is solely responsible for providing the goods or services described in the voucher.
        </p>
      </div>

      <div className="policy-section">
        <h2>3 | Refunds and Disputes</h2>
        <p>
          In the event of a dispute, failure to redeem, or a request for a refund, customers must contact the business directly. Our platform does not issue refunds on behalf of businesses and does not guarantee the performance of any goods or services.
        </p>
      </div>

      <div className="policy-section">
        <h2>4 | Platform Role</h2>
        <p>
          We provide a platform for businesses to connect with their customers and manage voucher distribution. We do not act as the seller of the goods or services and are not liable for any issues arising from their fulfillment.
        </p>
      </div>
    </div>
  );
};

export default ProductPolicy;
