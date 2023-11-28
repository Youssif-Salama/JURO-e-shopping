import { useFormik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import * as Yup from "yup";
import { LoginContext } from "../../contexts/LoginContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const Login = () => {
  // making var to carry use Navigate
  let navigate = useNavigate();
  //  making var to carry LoginContext
  let { loginUser } = useContext(LoginContext);
  // -------------------
  let validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
      ),
  });
  // ---------------------------------------
  async function handleSubmit(values) {
    let result = await loginUser(values);
    if (result?.data.message === "success") {
      localStorage.setItem("userToken", result.data.token)
      toast.success("welcome");
      navigate("/");
    }
  }
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: handleSubmit,
    validationSchema,
  });
  return (
    <div className="minHeight">
      <div className="signUp container my-3 d-flex justify-content-center">
        <div className="card">
          <div className="card-header">
            <div className="text-header">login</div> for
          </div>
          <div className="card-body">
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <label>Email:</label>
                <input
                  required=""
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="form-control"
                  name="email"
                  id="email"
                  type="email"
                />
              </div>
              {formik.touched.email && formik.errors.email ? (
                <div className="error text-danger">{formik.errors.email}</div>
              ) : (
                ""
              )}
              <div className="form-group">
                <label>Password:</label>
                <input
                  required=""
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  className="form-control"
                  name="password"
                  id="password"
                  type="password"
                />
              </div>
              {formik.touched.password && formik.errors.password ? (
                <div className="error text-danger">{formik.errors.password}</div>
              ) : (
                ""
              )}
              <input
                type="submit"
                className="w-100 juro_btn"
                value="submit"
                disabled={!(formik.isValid && formik.dirty)}
              />{" "}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
