import React, { useState } from "react";
import "./Contac.css";
import BannerImage from "./images/contact.gif";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="contacInformation">
      <div className="container contact-form-container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="form-container">
              <h2>আপনার কি কোন প্রশ্ন আছে ?</h2>
              <p>এখনি ফরমটি পূরণ করুন,এবং আপনাদের মতামত আমাদেরকে জানান</p>
              <form onSubmit={handleSubmit}>
                <label htmlFor="name">আপনার নাম দিনঃ</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="phone">আপনার মোবাইল নাম্বার দিনঃ</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="subject">বিষয়ঃ</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="message"> বার্তা লিখুনঃ</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>

                <button className="submitBtn" type="submit">
                  জমা দিন <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 banner">
            <img src={BannerImage} alt="Banner" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
