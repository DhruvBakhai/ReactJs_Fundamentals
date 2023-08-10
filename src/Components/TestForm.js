import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./TestForm.css";
import ErrorTest from "./ErrorTest";

const initialValues = {
  /*  step - 1
  pass in inital values for our form field */
  //this name shall match the respective form field name property

  name: "",
  email: "",
  password: "",
  comments: "",
  socials: {
    facebook: "",
    twitter: "",
  },
  phonenumbers: ["", ""],
};

const onSubmit = (values) => {
  console.log("Form data", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string().required("Required"),
  address: Yup.string().required("Required"),

  //   channel: Yup.string().required("Required"),
  //   comments: Yup.string().required("Required"),
});

function TestForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      <Form className="form-container">
        {/* this Form component will automatically handle the onSubmit method
         step - 2 
    we need to add the onChange and value prop in every form field */}
        {/* form submission
        step 1
        specify onSubmit handler on submit button */}
        <div>
          <label htmlFor="name">Name:- </label>
          <Field
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name here..."
          />
          <ErrorMessage name="name" component={ErrorTest} />
        </div>

        <div>
          <label htmlFor="email">Email:- </label>
          <Field
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email here..."
          />
          <ErrorMessage name="email" component={ErrorTest} />
        </div>

        <div>
          <label htmlFor="password">Password:- </label>
          <Field
            type="password"
            id="password"
            placeholder="Enter your password here..."
            name="password"
          />
          <ErrorMessage name="password" component={ErrorTest} />
        </div>

        <div>
          <label htmlFor="comments">Comments:- </label>
          <Field
            as="textarea"
            placeholder="Enter any comments here..."
            id="comments"
            name="comments"
          />
        </div>

        <div>
          <label htmlFor="address">Address:- </label>
          <Field name="address">
            {(props) => {
              const { field, meta } = props;
              //   console.log("Render props", props);
              return (
                <div>
                  <input type="text" id="address" {...field} />
                  {meta.touched && meta.error ? (
                    <div> {meta.error} </div>
                  ) : null}
                </div>
              );
            }}
          </Field>
        </div>

        <div>
          <label htmlFor="facebook">Facebook profile:- </label>
          <Field
            placeholder="Enter your facebook profile..."
            id="facebook"
            name="social.facebook"
          />
        </div>

        <div>
          <label htmlFor="twitter">Twitter profile:- </label>
          <Field
            placeholder="Enter your twitter profile..."
            id="twitter"
            name="social.twitter"
          />
        </div>

        <div>
          <label htmlFor="primaryPh">Primary phonenumber:- </label>
          <Field
            placeholder="Enter your  primary mobile number..."
            id="primaryPh"
            name="phonenumber[0]"
          />
        </div>

        <div>
          <label htmlFor="secondaryPh">Secondary phonenumber:- </label>
          <Field
            placeholder="Enter your  secondary mobile number..."
            id="secondaryPh"
            name="phonenumber[1]"
          />
        </div>
        <br />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default TestForm;
