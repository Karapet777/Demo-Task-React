import React from "react";

import "../Footer/Footer.css";

const Footer = () => {
  return (
    <div className="app_footer">
      <div>
        <a href="https://www.instagram.com" target="blank">
          Instagram
        </a>
        <a href="https://www.facebook.com" target="blank">
          Facebook
        </a>
        <a href="https://www.pinterest.ru/" target="blank">
          Pinterest
        </a>
      </div>
      <div>
        <p>
          <span className="footer_contacts">Contacts</span>+7(2514986312)
        </p>
      </div>
    </div>
  );
};
export default Footer;
