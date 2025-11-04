import React from 'react';
import w1 from "../../assets/w1.png";
import w2 from "../../assets/w2.png";
import w3 from "../../assets/w3.png";
import w4 from "../../assets/w4.png";

const FirstSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-16">
      
      {/* Section 1 */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">How It Works?</h2>
          <p className="text-gray-600 leading-relaxed">
            Getting started with our platform is simple and seamless. Create your account, explore available services, 
            and choose what suits you best. Whether you're booking a consultation or accessing climate insights, our 
            platform ensures a smooth experience every step of the way.
            <br /><br />
            Our goal is to make it easy for you to access expertise and critical updates without unnecessary hurdles.
          </p>
        </div>
        <div className="flex-1">
          <img 
            src={w2} 
            alt="How it works" 
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-10">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">How to Make Payments?</h2>
          <p className="text-gray-600 leading-relaxed">
            We support secure online payments through trusted gateways. When booking services or consultations, 
            simply proceed to checkout, review your selections, and complete your transaction through our protected 
            payment page. Your payment information remains encrypted and confidential at all times.
            <br /><br />
            Need help? Our support team is always available to assist you with any payment-related questions.
          </p>
        </div>
        <div className="flex-1">
          <img 
            src={w1} 
            alt="Payments" 
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">How Is Personal Data Secured?</h2>
          <p className="text-gray-600 leading-relaxed">
            Protecting your personal information is our top priority. We use advanced encryption, secure servers, 
            and strict data governance policies to ensure that your personal data remains private and protected.
            <br /><br />
            Our platform complies with international data protection regulations, giving you peace of mind every time you interact with us.
          </p>
        </div>
        <div className="flex-1">
          <img 
            src={w4} 
            alt="Data Security" 
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Section 4 */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-10">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">How Are Payment Details Protected?</h2>
          <p className="text-gray-600 leading-relaxed">
            All payment transactions on our platform are processed using PCI-DSS compliant systems, ensuring 
            the highest standards of payment security. Sensitive data such as credit card information is never stored 
            on our servers, and transactions are encrypted end-to-end.
            <br /><br />
            Your trust matters to us, and we are committed to providing a safe and reliable environment for all financial transactions.
          </p>
        </div>
        <div className="flex-1">
          <img 
            src={w3} 
            alt="Payment Security" 
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>

    </div>
  );
};

export default FirstSection;
