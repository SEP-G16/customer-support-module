import React from "react";

const MenuPage = () => {
  return (
    <div className="container">
      <iframe
        src={"Our Menu_1.pdf#toolbar=0"}
        frameborder="0" 
        width="100%"
        height="750px"
        title = "Our Menu"
        style={{border: "none", marginTop: "0px"}} 
        allow="fullscreen" // Enable fullscreen for iframe
        allowFullScreen // This can also be used
      ></iframe>
    </div>
  );
};



export default MenuPage;
