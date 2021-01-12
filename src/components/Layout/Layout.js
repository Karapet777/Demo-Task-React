import React from "react";

import Footer from "../Footer/Footer";
import "../Layout/Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="app_Layout">
      <main className="app_main">
        {children}

        <Footer />
      </main>
    </div>
  );
};

export default Layout;
