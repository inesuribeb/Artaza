import Welcome from "./components/Welcome";
import InmoLocation from "./components/InmoLocation";
import CarouselLocation from "./components/CarouselLocation";
import PropertiesLand from "./components/PropertiesLand";
import BuyHomes from "./components/BuyHomes";
import './Landing.css'

function Landing() {

    return (
        <>           
            <Welcome />
            <InmoLocation />
            <CarouselLocation />
            <BuyHomes />
            <PropertiesLand />
        </>
    );
}

export default Landing;