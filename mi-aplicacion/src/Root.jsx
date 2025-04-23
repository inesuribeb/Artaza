import { Outlet } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import './Root.css'

function Root () {
    return (
        <LanguageProvider>
            <div>
                <Header />
                <Outlet />
                <Footer />
            </div>
        </ LanguageProvider>

    )
}

export default Root;