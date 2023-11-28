import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useContext } from "react";
import { SignupContext } from "../../contexts/SignupContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
const Signup = () => {
  // making var to carry navigate
  let navigate = useNavigate();
  //  declaring variable to carry sign up context
  const { addNewUser } = useContext(SignupContext);
  // ----------------------------------------------
  let validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
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
    rePassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Please confirm your password"),
    phone: Yup.string()
      .matches(/^(011|010|012|015)\d{8}$/, "Invalid phone number format")
      .required("Phone number is required"),
  });
  // ---------------------------------------
  async function handleSubmit(values) {
    let result = await addNewUser(values);
    console.log(result);
    if (result?.message === "success") {
      navigate("/login");
      toast.success("sign up successfully");
    } else if (result?.message === "fail") {
      toast.error("there is problem with ur input");
    } else {
      toast.error("account already here");
    }
  }
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    onSubmit: handleSubmit,
    validationSchema,
  });
  return (
    <div className="minHeight">
      <div className="signUp container my-3 d-flex justify-content-center">
        <div className="card">
          <div className="card-header">
            <div className="text-header">Signup</div> for
          </div>
          <div className="card-body">
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <label>name:</label>
                <input
                  required=""
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  className="form-control"
                  name="name"
                  id="name"
                  type="text"
                />
              </div>
              {formik.touched.name && formik.errors.name ? (
                <div className="error text-danger">{formik.errors.name}</div>
              ) : (
                ""
              )}
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
              <div className="form-group">
                <label>Confirm Password:</label>
                <input
                  required=""
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.rePassword}
                  className="form-control"
                  name="rePassword"
                  id="rePassword"
                  type="password"
                />
              </div>
              {formik.touched.rePassword && formik.errors.rePassword ? (
                <div className="error text-danger">
                  {formik.errors.rePassword}
                </div>
              ) : (
                ""
              )}
              <div className="form-group">
                <label>Phone:</label>
                <input
                  required=""
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                  className="form-control"
                  name="phone"
                  id="phone"
                  type="text"
                />
              </div>
              {formik.touched.phone && formik.errors.phone ? (
                <div className="error text-danger">{formik.errors.phone}</div>
              ) : (
                ""
              )}
              <input
                type="submit"
                className="w-100 juro_btn"
                value="submit"
                disabled={!(formik.isValid && formik.dirty)}
              />{" "}
              <hr />
              <p>
                already have an account: <a href="/login">login</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Signup;
