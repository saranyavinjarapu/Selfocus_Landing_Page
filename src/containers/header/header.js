import React from "react";
import people from "../../assets/people.png";
import selfocusLogo from "../../assets/selfocus_logo_128.png";
import "./header.css";
import { useSnackbar } from "notistack";
import { Formik, Form, Field } from "formik";
import { SignupSchema } from "../../utils/helpers";

const Header = () => {
  const { enqueueSnackbar } = useSnackbar();
  return (
    <div className="selfocus__header section__padding" id="home">
      <div className="selfocus__header-content">
        <h1 className="gradient__text">
          Increase Your Productivity By Eliminating Distractions
        </h1>
        <p>
          Selfocus replaces your default new tab page with a personal dashboard
          which helps you - assign goals for the day, create work sessions and
          break sessions, create to-do lists, and block distracting websites.{" "}
        </p>

        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values, { resetForm }) => {
            console.log(values.email);
            if (values.email) {
              enqueueSnackbar("Thank you for your submission !");
              resetForm();
            }
          }}
        >
          {({ errors, touched, handleSubmit }) => (
            <Form className="selfocus__header-content__input">
              <div style={{ flex: 2 }}>
                <Field
                  className="selfocus__header-content__inputemail"
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

        <div className="selfocus__header-content__people">
          <img src={people} alt="people_access" />
          <p>people who requested access a visit in last 24 hours</p>
        </div>
      </div>

      <div className="selfocus__header-image">
        <img src={selfocusLogo} alt="selfocus_logo" />
      </div>
    </div>
  );
};

export default Header;
