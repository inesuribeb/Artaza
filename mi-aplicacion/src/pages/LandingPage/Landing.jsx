import Welcome from "./components/Welcome";
import InmoLocation from "./components/InmoLocation";
import CarouselLocation from "./components/CarouselLocation";
import PropertiesLand from "./components/PropertiesLand";
import BuyHomes from "./components/BuyHomes";
import './Landing.css'

function Landing() {

    return (
        <div className="main-landing-container"> 
            <section className="welcome-section">         
                <Welcome />
            </section>
            <section className="content-container">
                <InmoLocation />
                <CarouselLocation />
                <BuyHomes />
                <PropertiesLand />
            </section>
        </div>
    );
}

export default Landing;

// import Welcome from "./components/Welcome";
// import InmoLocation from "./components/InmoLocation";
// import CarouselLocation from "./components/CarouselLocation";
// import PropertiesLand from "./components/PropertiesLand";
// import BuyHomes from "./components/BuyHomes";
// import './Landing.css'

// function Landing() {
//     return (
//         <div className="landing-container">
//             <section className="welcome-section">
//                 <Welcome />
//             </section>
            
//             <section className="content-container">
//                 <InmoLocation />
//                 <CarouselLocation />
//                 <BuyHomes />
//                 <PropertiesLand />
//             </section>
//         </div>
//     );
// }

// export default Landing;
