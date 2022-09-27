import React from 'react';
import "./footer.css";
const imgsrc = "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/imgpsh_fullsize_animjj.png?v=1656424471";

const FooterIcon = () => {
  return (
    <div className="footer-header-item">
      <img src={imgsrc} alt="plants grow people" width="32" height="32" /> 
        {"   "}plants grow people
    </div>
  )
}

export default FooterIcon