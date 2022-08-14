import React from "react";
import NavigationBar from "@/components/common/NavigationBar";
import Modal from "@/components/common/Modal";
import FooterBar from "@/components/common/FooterBar";
import Alert from "@/components/common/Alert";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <NavigationBar />
        <Modal title="Log Out" desc="Are you sure?" action="Log Out" />
        <main>{children}</main>
        <Alert alert="Save Changes" />
        <FooterBar />
      </div>
    </>
  );
};

export default Layout;
