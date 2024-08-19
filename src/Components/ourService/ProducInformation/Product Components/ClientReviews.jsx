import React from "react";
import "../ProductInformation.css";

const ClientReviews = () => {
  return (
    <div className="content">
      <h3 className="title">আপনার রিভিউ লিখুন</h3>
      <div className="review-section">
        <div className="rating">
          <span className="rating-label">রেটিং :</span>
          <span className="star">⭐⭐⭐⭐⭐ (5.0)</span>
        </div>
        <div className="comment-section">
          <label htmlFor="comment">মন্তব্য*</label>
          <textarea id="comment" placeholder="একটি মন্তব্য লিখুন"></textarea>
        </div>
        <button className="submit-review-btn">রিভিউ জমা দিন</button>
      </div>
    </div>
  );
};

export default ClientReviews;
