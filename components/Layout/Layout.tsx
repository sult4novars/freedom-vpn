import React from "react";
import type { FC, ReactNode } from 'react'
import Footer from "./Footer";
import Header from "./Header";

type Props = {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
