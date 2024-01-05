import React, { useState } from "react";
import "./cta.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

const Cta = () => {
  const [emailSubscription, setEmailSubscription] = useState(false);
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
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            console.log(values.email);
            if (values.email) {
              setEmailSubscription(true);
            }
          }}
        >
          {({ errors, touched, handleSubmit }) => (
            <Form className="selfocus__cta-signup">
              <div style={{ flex: 2 }}>
                <Field
                  className="selfocus__cta-signup_input"
                  name="email"
                  type="email"
                  placeholder="Your Email Address"
                />
                {errors.email && touched.email ? (
                  <div className="selfocus__cta-signup_error">
                    {errors.email}
                  </div>
                ) : null}
              </div>
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
                Get Started
              </button>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default Cta;
