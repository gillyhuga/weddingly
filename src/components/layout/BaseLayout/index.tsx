import React from "react";
import NavigationBar from "@/components/common/NavigationBar";
import Modal from "@/components/common/Modal";
import FooterBar from "@/components/common/FooterBar";
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store";
import { removeToken } from "src/store/auth";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const isAuthorized = useSelector((state: RootState) => state.auth.isAuthorized);

  const logout = () => {
    dispatch(removeToken());
    localStorage.clear()
  }

  return (
    <>
      <div>
        <NavigationBar
          logout={logout} />
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
