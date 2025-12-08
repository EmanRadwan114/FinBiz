import React from "react";
import { Outlet } from "react-router";
import { ThemeProvider } from "next-themes";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const Layout: React.FC = () => {
  return (
    <ThemeProvider attribute="class">
      <div className="layout">
        <Navbar />
        <div className="container">
          <Outlet />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
