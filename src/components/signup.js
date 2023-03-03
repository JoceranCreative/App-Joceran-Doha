import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});
const Signup = () => {
  return (
    <div>
      {/* <h1 className="font-serif text-lg text-gray-800 text-center text-3xl">Signup</h1> */}
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <div className="w-full max-w-xs mx-auto ">
          <Form  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
            <div className="mb-4">
              <label  className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
              <Field className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" name="email" />
              <ErrorMessage name="email" />
            </div>
             <div className="mb-6">
              <label className ="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
              <Field className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password" name="password" />
              <ErrorMessage name="password" />
              <p class="text-red-500 text-xs italic">Please choose a password.</p>
            </div>
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">Confirm Password</label>
            <Field className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" name="confirmPassword" />
            <ErrorMessage name="confirmPassword" />
             </div>
            <div className="flex items-center justify-between">
            <button className="shadow bg-blue-300 hover:bg-blue-200 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit" disabled={isSubmitting}>
              Sign Up
            </button>
            </div>
          </Form>
              <p class="text-center text-xs">
                     &copy;2023 Acme Corp. All rights reserved.
              </p>
           </div>
        )}
      </Formik>
    </div>
  );
};
export default Signup;