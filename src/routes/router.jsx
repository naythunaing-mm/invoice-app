import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import NotFoundPage from "../pages/NotFoundPage";
import DashboardPage from "../pages/DashboardPage";
import ProductPage from "../pages/ProductPage";
import InvoicePage from "../pages/InvoicePage";
import SalePage from "../pages/SalePage";
import ProductCreatePage from "../pages/ProductCreatePage";
import ProductEditPage from "../pages/ProductEditPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: "/",
                element: <DashboardPage />,
            },
            {
                path: "/product",
                element: <ProductPage />,
            },
            {
                path: "/invoice",
                element: <InvoicePage />
            },
            {
                path: "/sale-module",
                element: <SalePage />
            },
            {
                path: "/add-product",
                element: <ProductCreatePage />
            },
            {
                path: "/edit-product/:id",
                element: <ProductEditPage />
            }
        ]
    },
]);

export default router