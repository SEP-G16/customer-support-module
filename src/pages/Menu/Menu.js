import React from "react";
import pdfFile from "./assets/Our Menu_1.pdf";

const MenuPage = () => {
  return (
    <div className="container">
      <iframe
        src={pdfFile + "#toolbar=0"}
        frameBorder="0"
        width="100%"
        height="750px"
        title="Our Menu"
        style={{
          border: "none",
          marginTop: "0px",
        }}
      ></iframe>
    </div>
  );
};

export default MenuPage;
