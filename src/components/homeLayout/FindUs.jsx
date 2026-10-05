import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Find us on</h2>
      <div>
        <div className="join join-vertical w-full">
          <button className="btn join-item justify-start bg-base-100"><FaFacebook></FaFacebook> Facebook</button>
          <button className="btn join-item justify-start bg-base-100"><FaTwitter></FaTwitter> Twitter</button>
          <button className="btn join-item justify-start bg-base-100"><FaInstagram></FaInstagram> Instagram</button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
