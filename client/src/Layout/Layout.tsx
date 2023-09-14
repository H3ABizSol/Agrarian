import React from "react";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

const layout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default layout;
