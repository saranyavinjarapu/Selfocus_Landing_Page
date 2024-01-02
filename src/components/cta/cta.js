import React, { useRef, useState } from "react";
import "./cta.css";

const Cta = () => {
  const emailRef = useRef(null);
  const [emailSubscription, setEmailSubscription] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setEmailSubscription(true);
  };
  return (
    <div className="selfocus__cta section__margin">
      <div className="selfocus__cta-content">
        <p>Request Early Access to Get Started</p>
        <h3>Register Today & start exploring the features</h3>
      </div>

      {emailSubscription ? (
        <div className="selfocus__cta-submission">
          <h1>Thank you for your submission</h1>
          <p>
            We care about your data. The Google{" "}
            <a href="https://policies.google.com/terms">Terms</a> and{" "}
            <a href="https://policies.google.com/privacy">Privacy Policy</a>{" "}
            apply.
          </p>
        </div>
      ) : (
        <div className="selfocus__cta-btn">
          <input type="email" ref={emailRef} placeholder="Your Email Address" />
          <button type="button" onClick={handleOnSubmit}>
            Get Started
          </button>
        </div>
      )}
    </div>
  );
};

export default Cta;
