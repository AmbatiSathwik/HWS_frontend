import React from "react";
import Footer from "./Footer";
import Menu from "./Menu";

const Base = ({ title, children }) => {
  return (
    <div>
      <div>
        <Menu />
        <div className="children">
          <div className="text-center text-dark mt-3">
            <h2>{title}</h2>
          </div>
          <div></div>
          <div>{children}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Base;
