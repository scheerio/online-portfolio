import React from "react";
import profile from "../assets/profile.JPG";

const Header = () => {
  return (
    <header className="center">
      <div className="d-flex flex-column">
        <div className="border-4 border-white rounded-lg mb-2">
          <img
            src={profile}
            alt="Author"
            width="100"
            className="w-full h-full object-cover rounded"
          />
        </div>
        <h1 className="fs-1 font-semibold">Ben's Portfolio 📚</h1>
        <p className="bio mt-2">
          <strong>Welcome!</strong> I'm Ben Scheer, a software
          engineer who loves designing, building, and launching digital
          products. I'm focused on front-end and full-stack engineering,
          especially for web development. This website was built with React, JavaScript, Bootstrap, and Netlify.
        </p>
      </div>
    </header>
  );
};

export default Header;
