import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from "./Root";
import Landing from "./pages/LandingPage/Landing";
import Properties from "./pages/Properties/Properties";
import IndividualHome from "./pages/IndividualHome/IndividualHome";
import Buy from "./pages/Buy/Buy";
import Sell from "./pages/Sell/Sell";
// import Contact from "./pages/Contact/Contact";
import ContactTwo from "./pages/Contact/Contact2";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/", // Redirigir directamente
                element: <Navigate to="/inicio" replace />
            },
            // Rutas en español
            {
                path: "/inicio",
                element: <Landing />
            },
            {
                path: "/propiedades",
                element: <Properties />
            },
            {
                path: "/propiedad/:id",
                element: <IndividualHome />
            },
            {
                path: "/comprar",
                element: <Buy />
            },
            {
                path: "/vender",
                element: <Sell />
            },
            {
                path: "/contacto",
                element: <ContactTwo />
            },

            // Rutas en inglés (mismos componentes, diferentes URLs)
            {
                path: "/home",
                element: <Landing />
            },
            {
                path: "/properties",
                element: <Properties />
            },
            {
                path: "/property/:id",
                element: <IndividualHome />
            },
            {
                path: "/buy",
                element: <Buy />
            },
            {
                path: "/sell",
                element: <Sell />
            },
            {
                path: "/contact",
                element: <ContactTwo />
            },
        ]
    },
]);

export default router;