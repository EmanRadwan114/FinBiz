import React from "react";
import { Outlet } from "react-router";
import { ThemeProvider } from "next-themes";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const Layout: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class">
        <ToastContainer />
        <div className="layout">
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default Layout;
