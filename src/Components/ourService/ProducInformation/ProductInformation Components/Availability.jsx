import React from "react";
import "../ProductInformation.css";
const Availability = () => {
  return (
    <div>
      <h2>সার্ভিস এর দৈনিক সময়</h2>
      <ul>
        <li>
          <span className="dot"></span> রবিবার ০৮:০০ AM - ০৯:০০ PM
        </li>
        <li>
          <span className="dot"></span> সোমবার ০৮:০০ AM - ০৯:০০ PM
        </li>
        <li>
          <span className="dot"></span> মঙ্গলবার ০৮:০০ AM - ০৯:০০ PM
        </li>
        <li>
          <span className="dot"></span> বুধবার ০৮:০০ AM - ০৯:০০ PM
        </li>
        <li>
          <span className="dot"></span> বৃহস্পতিবার ০৮:০০ AM - ০৯:০০ PM
        </li>
        <li>
          <span className="dot"></span> শুক্রবার ০৮:০০ AM - ০৯:০০ PM
        </li>
      </ul>
    </div>
  );
};

export default Availability;
