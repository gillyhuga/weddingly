import React from "react";
import NavigationBar from "@/components/common/NavigationBarLogin";
import Modal from "@/components/common/Modal";
import Alert from "@/components/common/Alert";
import FooterBar from "@/components/common/FooterBar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="bg-white">
        <NavigationBar />
        <Modal title="Log Out" desc="Are you sure?" action="Log Out" />
        <main>{children}</main>
        {/* <Alert alert="Save Changes" /> */} {/* jika ingin menampilkan alert */}
        <FooterBar />
      </div>
    </>
  );
};

export default Layout;