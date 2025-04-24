import Welcome from "./components/Welcome";
import InmoLocation from "./components/InmoLocation";
import CarouselLocation from "./components/CarouselLocation";
import './Landing.css'

function Landing() {

    return (
        <>           
            <Welcome />
            <InmoLocation />
            <CarouselLocation />
        </>
    );
}

export default Landing;