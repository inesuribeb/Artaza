import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from "./Root";
import Landing from "./pages/LandingPage/Landing";
import Properties from "./pages/Properties/Properties";
import IndividualHome from "./pages/IndividualHome/IndividualHome";
import Buy from "./pages/Buy/Buy";
import Sell from "./pages/Sell/Sell";
// import Contact from "./pages/Contact/Contact";
import ContactTwo from "./pages/Contact/Contact2";
import South from "./pages/South/South";
import Privacidad from "./pages/Privacidad/Privacidad";
import Cookies from "./pages/Privacidad/Cookies";

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
            {
                path: "/sur",
                element: <South />
            },
            {
                path: "/privacidad",
                element: <Privacidad />
            },
            {
                path: "/cookies-es",
                element: <Cookies />
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
            {
                path: "/south",
                element: <South />
            },
            {
                path: "/privacy",
                element: <Privacidad />
            },
            {
                path: "/cookies-en",
                element: <Cookies />
            },
        ]
    },
]);

export default router;