import React from "react";
import NavigationBar from "@/components/common/NavigationBar";
import Modal from "@/components/common/Modal";
import FooterBar from "@/components/common/FooterBar";
import { Toaster } from 'react-hot-toast';

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <NavigationBar />
        <main>
          <Toaster
            position="top-center"
            reverseOrder={false}
          />
          {children}</main>
        <FooterBar />
      </div>
    </>
  );
};

export default Layout;
