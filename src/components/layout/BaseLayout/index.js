import React from "react";
import NavigationBar from "@/components/common/NavigationBar";
import FooterBar from "@/components/common/FooterBar";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <NavigationBar />
        <main>{children}</main>
        <FooterBar />
      </div>
    </>
  );
};

export default Layout;
