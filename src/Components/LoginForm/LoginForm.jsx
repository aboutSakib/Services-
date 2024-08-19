import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginImages from "../ourService/images/login.svg";
import "./Login.css";

const LoginForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Login Successfully!!");
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100 login-wrapper">
      <div className="row w-100 justify-content-center align-items-center">
        <div className="col-lg-6 col-md-8 col-sm-10 col-12 d-flex justify-content-center align-items-center mb-4">
          <img src={LoginImages} alt="Login" className="img-fluid login-image" />
        </div>
        <div className="col-lg-6 col-md-8 col-sm-10 col-12">
          <div className="loginForm">
            <h2 className="text-center">Login Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  placeholder="আপনার নাম দিন"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  id="phone"
                  placeholder="আপনার মোবাইল নাম্বার দিন"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  placeholder="আপনার ইমেল দিন"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id="password"
                  placeholder="আপনার পাসওইয়ার্ড দিন"
                  className="form-control"
                  required
                />
              </div>
              <button type="submit" className="btn btn-success btn-block">
                Login <i className="fas fa-paper-plane"></i>
              </button>
              <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
