import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Landing from "./pages/LandingPage/Landing";
import Properties from "./pages/Properties/Properties";
import IndividualHome from "./pages/IndividualHome/IndividualHome";
import Buy from "./pages/Buy/Buy";
import Sell from "./pages/Sell/Sell";
import Contact from "./pages/Contact/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            // Rutas en español
            {
                path: "/home",
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
                element: <Contact />
            },
            
            // Rutas en inglés (mismos componentes, diferentes URLs)
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
                element: <Contact />
            },
        ]
    },
]);

export default router;