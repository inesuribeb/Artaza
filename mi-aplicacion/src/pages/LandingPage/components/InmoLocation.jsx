import { useNavigate } from 'react-router-dom';
import { useLanguage } from "../../../contexts/LanguageContext";
import Button from '../../../components/Button/Button';
import './InmoLocation.css'

function InmoLocation({ visibleSections }) {
    const { t, getRoute } = useLanguage();
    const navigate = useNavigate();

    return (
        <div className={`section-inmolocation ${visibleSections.inmoLocation ? 'visible' : ''}`}>

        {/* <div className='section-inmolocation'> */}
            <div className="inmolocation-inner">
                <div className="inmolocation-left">
                    <h1 dangerouslySetInnerHTML={{ __html: t('subtitulo2') }}></h1>
                    <h3 dangerouslySetInnerHTML={{ __html: t('textosubtitulo2') }}></h3>
                    <Button 
                        translationKey="botonquienessomos" 
                        routeName="contact" 
                    />
                </div>

                <div className="inmolocation-right">
                    <img src="/images/capturaPrueba.png" alt="artaza-inmo" />
                </div>
            </div>
            {/* <div className="carousel-location">
                <h3>{t('artaza')}</h3>
            </div> */}
        {/* </div> */}
        </div>
    )
}

export default InmoLocation;

// import { useNavigate } from 'react-router-dom';
// import { useLanguage } from "../../../contexts/LanguageContext";
// import Button from '../../../components/Button/Button';
// import { useVisibilityAnimation } from '../../../hooks/useVisibilityAnimation'
// import './InmoLocation.css';

// function InmoLocation({ visibleSections }) {
//     const { t, getRoute } = useLanguage();
//     const navigate = useNavigate();
    
//     const leftContent = useVisibilityAnimation('inmoLocation', visibleSections, {
//         position: 'left',
//         delayMultiplier: 1
//     });
    
//     const rightContent = useVisibilityAnimation('inmoLocation', visibleSections, {
//         position: 'right',
//         delayMultiplier: 2
//     });
    
//     const bottomContent = useVisibilityAnimation('inmoLocation', visibleSections, {
//         position: 'bottom',
//         delayMultiplier: 3
//     });

//     return (
//         <div className='section-inmolocation'>
//             <div className="inmolocation-inner">
//                 <div className={`inmolocation-left ${leftContent.className}`} style={leftContent.style}>
//                     <h1 dangerouslySetInnerHTML={{ __html: t('subtitulo2') }}></h1>
//                     <h3 dangerouslySetInnerHTML={{ __html: t('textosubtitulo2') }}></h3>
//                     <Button 
//                         translationKey="botonquienessomos" 
//                         routeName="contact" 
//                     />
//                 </div>

//                 <div className={`inmolocation-right ${rightContent.className}`} style={rightContent.style}>
//                     <img src="/images/capturaPrueba.png" alt="artaza-inmo" />
//                 </div>
//             </div>
//             <div className={`carousel-location ${bottomContent.className}`} style={bottomContent.style}>
//                 <h3>{t('artaza')}</h3>
//             </div>
//         </div>
//     );
// }

// export default InmoLocation;