import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Layout.tsx";
import Home from "./pages/Home.tsx";
import Notfound from "./components/notfound/Notfound.tsx";
import Product from "./pages/Product.tsx";
import Pages from "./pages/Pages.tsx";
import Integrations from "./pages/Integrations.tsx";
import Blog from "./pages/Blog.tsx";
import Pricing from "./pages/Pricing.tsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/product", element: <Product /> },
      { path: "/pages", element: <Pages /> },
      { path: "/integrations", element: <Integrations /> },
      { path: "/blog", element: <Blog /> },
      { path: "/pricing", element: <Pricing /> },
      { path: "*", element: <Notfound /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
