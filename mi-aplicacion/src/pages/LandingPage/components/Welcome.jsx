import { useState, useEffect } from 'react';
import { useLanguage } from "../../../contexts/LanguageContext";
import './Welcome.css';

function Welcome({ scrollProgress = 0 }) {
    const { t, getRoute } = useLanguage();
    const [isLoaded, setIsLoaded] = useState(false);
    
    useEffect(() => {
        setIsLoaded(true);
    }, []);


    const containerStyle = {
        opacity: 1,
        backgroundImage: `linear-gradient(rgba(0, 0, 0, ${Math.max(0, 0.2 - scrollProgress * 0.3)}), 
                          rgba(0, 0, 0, ${Math.max(0, 0.2 - scrollProgress * 0.3)})), 
                          url('/images/inmo2.png')`,
        backgroundColor: '#F3F1E9',
        backgroundBlendMode: 'multiply',
        backgroundSize: `cover`,
        maskImage: `linear-gradient(rgba(0, 0, 0, ${Math.max(0, 1 - scrollProgress * 1.2)}), 
                    rgba(0, 0, 0, ${Math.max(0, 1 - scrollProgress * 1.2)}))`,
        WebkitMaskImage: `linear-gradient(rgba(0, 0, 0, ${Math.max(0, 1 - scrollProgress * 1.2)}), 
                          rgba(0, 0, 0, ${Math.max(0, 1 - scrollProgress * 1.2)}))`
    };

    // const h1Style = {
    //     transform: `translateY(${-scrollProgress * 50}px) scale(${1 - scrollProgress * 0.3})`,
    // };

    // const h3Style = {
    //     transform: `translateY(${-scrollProgress * 30}px) scale(${1 - scrollProgress * 0.2})`,
    // };

    return (
        <div className='landing-container' style={containerStyle}>
            <h1 
                // style={h1Style} 
                dangerouslySetInnerHTML={{ __html: t('tituloprincipal') }}
            ></h1>
            <h3 
                // style={h3Style} 
                dangerouslySetInnerHTML={{ __html: t('subtitulo') }}
            ></h3>
        </div>
    );
}

export default Welcome;

