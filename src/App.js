import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './App.css';

import "bootstrap/dist/css/bootstrap.css";

const validationSchema = Yup.object().shape({
  fullname: Yup.string().required('Fullname is required'),
  username: Yup.string()
    .required('Username is required')
    .min(6, 'Username must be at least 6 characters')
    .max(20, 'Username must not exceed 20 characters'),
    email: Yup.string()
    .required('Email is required')
    .email('Email is invalid'),
    password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(40, 'Password must not exceed 40 characters'),
    confirmPassword: Yup.string()
    .required('Confirm Password is required')
    .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
    acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required'),
});


function App() {
  return (
    <div className="container">
        <div className="row mb-4">
          <div className="col-lg-12 text-center">
            <h1 className="header">Login Form</h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-12'>
            <Formik
              initialValues={{ 
                fullname: '',
                username: '',
                email: '',
                password: '',
                confirmPassword: '',
                acceptTerms: false
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                alert("Form is validated! Submitting the form...");
                console.log(values);
                setSubmitting(false);
              }}
            >
              { ({ touched, errors, isSubmitting }) => (
                <Form>
                  <div className='form-group'>
                    <div className='form-label'>
                    <label htmlFor='fullname'>Full Name</label>
                    </div>
                    <div>
                    <Field
                      type='text'
                      name='fullname'
                      placeholder='Enter your full name'
                      className={`form-control ${touched.fullname && errors.fullname ? "is-invalid" : ""}`}
                    />
                    <ErrorMessage
                      component='div'
                      name='fullname'
                      className='invalid-feedback'
                    />
                    </div>
                  </div>

                  <div className='form-group'>
                    <div className='form-label'>
                      <label htmlFor='username'>User Name</label>
                    </div>
                    <Field
                      type='text'
                      name='username'
                      placeholder='Enter your user name'
                      className={`form-control ${touched.username && errors.username ? "is-invalid" : ""}`}
                    />
                    <ErrorMessage
                      component='div'
                      name='username'
                      className='invalid-feedback'
                    />
                  </div>

                  <div className='form-group'>
                    <div className='form-label'>
                      <label htmlFor='email'>Email</label>
                    </div>
                    <Field
                      type='email'
                      name='email'
                      placeholder='Enter your email'
                      className={`form-control ${touched.email && errors.email ? "is-invalid" : ""}`}
                    />
                    <ErrorMessage
                      component='div'
                      name='email'
                      className='invalid-feedback'
                    />
                  </div>

                  <div className='form-group'>
                    <div className='form-label'>
                      <label htmlFor='password'>Password</label>
                    </div>
                    <Field
                      type='password'
                      name='password'
                      placeholder='Enter password'
                      className={`form-control ${touched.password && errors.password ? "is-invalid" : ""}`}
                    />
                    <ErrorMessage
                      component='div'
                      name='password'
                      className='invalid-feedback'
                    />
                  </div>

                  <div className='form-group'>
                    <div className='form-label'>
                      <label htmlFor='confirmPassword'>Confirm Password</label>
                    </div>
                    <Field
                      type='password'
                      name='confirmPassword'
                      placeholder='Re-enter password'
                      className={`form-control ${touched.confirmPassword && errors.confirmPassword ? "is-invalid" : ""}`}
                    />
                    <ErrorMessage
                      component='div'
                      name='confirmPassword'
                      className='invalid-feedback'
                    />
                  </div>

                  <div className="form-group form-check form-label">
                    <Field
                      name='acceptTerms'
                      type='checkbox'
                      className={`form-check-input ${touched.acceptTerms && errors.acceptTerms ? "is-invalid" : ""}`}
                    />
                    <label htmlFor='acceptTerms' className='form-check-label'>
                      I have read and agree to the Terms
                    </label>
                    <ErrorMessage
                      name='acceptTerms'
                      component='div'
                      className='invalid-feedback'/>
                  </div>
                  <div className='button'>
                  <button
                    type="submit"
                    className='inner-button'
                    disabled={isSubmitting}>
                      {isSubmitting ? "Please wait..." : "Submit"}
                  </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
    </div>
  );
}

export default App;
