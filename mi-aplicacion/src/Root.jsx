import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Curtain from "./components/Curtain/Curtain";
import './Root.css'

function Root() {
    const location = useLocation();
    const [showCurtain, setShowCurtain] = useState(true);
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    
    if (showCurtain) {
        return <Curtain onDone={() => setShowCurtain(false)} />;
    }
    
    return (
        <LanguageProvider>
            <div>
                <Header />
                <div className="outlet-container">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </LanguageProvider>
    );
}

export default Root;

// import { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { Outlet } from "react-router-dom";
// import { LanguageProvider } from "./contexts/LanguageContext";
// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
// import Curtain from "./components/Curtain/Curtain";
// import './Root.css'

// function Root() {
//     const location = useLocation();
//     const [showCurtain, setShowCurtain] = useState(true);
//     const [animationComplete, setAnimationComplete] = useState(false);
    
//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, [location]);
    
//     return (
//         <LanguageProvider>
//             <div>
//                 {showCurtain && <Curtain onDone={() => setShowCurtain(false)} />}
                
//                 <div className={`main-app ${animationComplete ? 'fully-visible' : 'waiting'}`}>
//                     <Header />
//                     <div className="outlet-container">
//                         <Outlet />
//                     </div>
//                     <Footer />
//                 </div>
                
//                 {!showCurtain && !animationComplete && (
//                     <div 
//                         className="white-transition" 
//                         onAnimationEnd={() => setAnimationComplete(true)}
//                     ></div>
//                 )}
//             </div>
//         </LanguageProvider>
//     );
// }

// export default Root;