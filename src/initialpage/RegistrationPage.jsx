/**
 * Signin Firebase
 */

import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Applogo } from "../Entryfile/imagepath.jsx";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { alphaNumericPattern, emailrgx } from "../constant";

import axios from "axios";
import apis from "../constant/apis";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup
  .object({
    email: yup
      .string()
      .matches(emailrgx, "Email is required")
      .required("Email is required")
      .trim(),
    password: yup
      .string()
      .min(6)
      .max(50)
      .required("Password is required")
      .trim(),
    repeatPassword: yup.string().required("ConfirmPassword is required").trim(),
    fullname: yup
      .string()
      .min(4)
      .max(50)
      .required("Full name is required")
      .trim(),
    phonenumber: yup.string().matches(phoneRegExp, "Phone number is not valid"),
  })
  .required();

const Registrationpage = (props) => {
  /**
   * On User Login
   */
  const [eye, seteye] = useState(true);
  const [emailerror, setEmailError] = useState("");
  const [nameerror, setNameError] = useState("");
  const [passworderror, setPasswordError] = useState("");
  const [formgroup, setFormGroup] = useState("");
  const [inputValues, setInputValues] = useState({
    email: "admin@dreamguys.co.in",
    password: "123456",
  });

  const [axiosError, setAxiosError] = useState("");

  const {
    handleSubmit,
    control,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("data", data);

    if (data.password != data.repeatPassword) {
      setError("password", {
        message: "password is mismatch",
      });
    } else {
      axios
        .post(apis.addUser, {
          full_name: data.fullname,
          phone: data.phonenumber,
          email: data.email,
          password: data.password,
        })
        .then((data) => {
          console.log(data.data.data);
          localStorage.setItem("token", data.data.data);
          window.location.href = "/";
        })
        .catch((error) => {
          console.log(error);
          setAxiosError(error.response.data.data);
        });
      clearErrors("password");
      props.history.push("Bussiness");
    }
  };
  const onEyeClick = () => {
    seteye(!eye);
  };
  const onUserLogin = (e) => {
    e.preventDefault();

    if (this.state.email !== "" && this.state.password !== "") {
      this.props.signinUserInFirebase(this.state, this.props.history);
    }
  };

  const onApplyJob = (e) => {
    e.preventDefault();
    localStorage.removeItem("jobview");
    this.props.history.push("/applyjob/joblist");
  };

  const { loading } = props;
  return (
    <>
      <Helmet>
        <title>Register</title>
        <meta name="description" content="Login page" />
      </Helmet>
      <div className="account-content">
        <div className="container">
          {/* Account Logo */}
          <div className="account-logo">
            <Link>
              <img src={Applogo} alt="Dreamguy's Technologies" />
            </Link>
          </div>
          {/* /Account Logo */}
          <div className="account-box">
            <div className="account-wrapper">
              <h3 className="account-title">Register</h3>
              <p className="account-subtitle">Access to our dashboard</p>
              {/* Account Form */}
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group">
                    <label>Full Name</label>
                    <Controller
                      name="fullname"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <input
                          className={`form-control  ${
                            errors?.fullname ? "error-input" : ""
                          }`}
                          type="text"
                          value={value}
                          onChange={onChange}
                          autoComplete="false"
                        />
                      )}
                      defaultValue="Dream Guys"
                    />

                    <small>{errors?.fullname?.message}</small>
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <Controller
                      name="email"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <input
                          className={`form-control  ${
                            errors?.email ? "error-input" : ""
                          }`}
                          type="text"
                          value={value}
                          onChange={onChange}
                          autoComplete="false"
                        />
                      )}
                      defaultValue="admin@dreamguys.co.in"
                    />

                    <small>{errors?.email?.message}</small>
                  </div>

                  <div className="form-group">
                    <label>Phone Number</label>
                    <Controller
                      name="phonenumber"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <input
                          className={`form-control  ${
                            errors?.email ? "error-input" : ""
                          }`}
                          type="text"
                          value={value}
                          onChange={onChange}
                          autoComplete="false"
                        />
                      )}
                      defaultValue="93484847477"
                    />

                    <small>{errors?.phonenumber?.message}</small>
                  </div>

                  <div className="form-group">
                    <label>Password</label>
                    <Controller
                      name="password"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <div className="pass-group">
                          <input
                            type={eye ? "password" : "text"}
                            className={`form-control  ${
                              errors?.password ? "error-input" : ""
                            }`}
                            value={value}
                            onChange={onChange}
                            autoComplete="false"
                          />
                          <span
                            onClick={onEyeClick}
                            className={`fa toggle-password" ${
                              eye ? "fa-eye-slash" : "fa-eye"
                            }`}
                          />
                        </div>
                      )}
                      defaultValue="123456"
                    />

                    <small>{errors?.password?.message}</small>
                  </div>
                  <div className="form-group">
                    <label>Repeat Password</label>
                    <Controller
                      name="repeatPassword"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <input
                          className={`form-control  ${
                            errors?.repeatPassword ? "error-input" : ""
                          }`}
                          type="text"
                          value={value}
                          onChange={onChange}
                          autoComplete="false"
                        />
                      )}
                      defaultValue=""
                    />
                    <small>{errors?.repeatPassword?.message}</small>
                  </div>
                  <div className="form-group text-center">
                    <small>{axiosError}</small>
                    <button
                      className="btn btn-primary account-btn"
                      type="submit"
                    >
                      Register
                    </button>
                  </div>
                </form>
                <div className="account-footer">
                  <p>
                    Already have an account? <Link to="/login">Login</Link>
                  </p>
                </div>
              </div>
              {/* /Account Form */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registrationpage;
