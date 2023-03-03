import React, { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import { Person, Lock } from "@material-ui/icons";
import { useFormik } from "formik";
import * as Yup from "yup";
import SubmitForm from "./SubmitForm";const Login = () => {
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email address is required"),
      password: Yup.string().min(5).required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      setIsSubmitSuccess(true)
    },
  });
  return (
    <div className="container bg-white">
      <div className={!isSubmitSuccess ? "signin signin_wrapper" : "signin signin_success"} style={{margin:"100px"}}>
        {isSubmitSuccess ? (
          <SubmitForm />
        ) : (
          <form onSubmit={formik.handleSubmit}>
            <h2>Login Form</h2>
            <TextField
              name="email"
              type="text"
              placeholder="Email"
              className="textField p-2"
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <Person />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error_msg">{formik.errors.email}</div>
            ) : null}
            <TextField
              name="password"
              type="password"
              placeholder="Password"
              className="textField p-2"
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <Lock />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error_msg">{formik.errors.password}</div>
            ) : null}
            <div>
              <button type="submit" className="m-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
              <h3> Pas encore inscript ? <span className="signup"><button className="bg-blue-500 hover:bg-red-700 text-white py-1 px-2 rounded">Inscription</button></span></h3>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
export default Login;