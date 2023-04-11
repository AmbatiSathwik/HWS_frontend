import React from "react";
import Footer from "./Footer";
import Menu from "./Menu";

const Base = ({ children,detail }) => {
  return (
    <div>
      <Menu detail={detail}/>
      <div className="children" >
        <div>{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Base;
