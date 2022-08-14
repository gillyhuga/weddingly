import React from "react";
import NavigationBar from "@/components/common/NavigationBar";
import Modal from "@/components/common/Modal";
import FooterBar from "@/components/common/FooterBar";
import Alert from "@/components/common/Alert";

const Layout = ({ children }) => {
  return (
    <>
      <div className="bg-white">
        <NavigationBar />
        <main>{children}</main>
        <FooterBar />
      </div>
    </>
  );
};

export default Layout;
