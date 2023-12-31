import React from "react";
import { Formik, Form, Field } from "formik";
import { SignupSchema } from "../../utils/helpers";
import "./signup.css";

const signup = (props) => {
  return (
    <Formik
      initialValues={{
        email: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, { resetForm }) => {
        console.log(values.email);
        if (values.email) {
          props.handleSignupSubmit();
          resetForm();
        }
      }}
    >
      {({ errors, touched, handleSubmit }) => (
        <Form className="selfocus__signup">
          <div style={{ flex: 2 }}>
            <Field
              className="selfocus__signup-input"
              name="email"
              type="email"
              placeholder="Your Email Address"
            />
            {errors.email && touched.email ? (
              <div className="selfocus__signup-error">{errors.email}</div>
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
  );
};

export default signup;
