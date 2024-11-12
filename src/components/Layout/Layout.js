import React from "react";
import Header from "./Header";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{ marginTop: "30px", marginBottom: "30px" }}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
