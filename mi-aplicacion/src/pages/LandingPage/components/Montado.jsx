// import './Montado.css'

// function Montado() {

//     const images = [
//         '/images/carousel/Carousel1.png',
//         '/images/carousel/Carousel2.png',
//         '/images/carousel/Carousel5.png',
//         '/images/carousel/Carousel4.png',
//         '/images/carousel/Carousel3.png',
//         '/images/carousel/Carousel6.png',
//         '/images/carousel/Carousel7.png',
//     ];

//     return (
//         <div className='carrrusel-wrapper'>
//             <div className='picture-big'>
//                 <img src="/images/queTal.png" alt="artaza-inmo" />
//             </div>
//             <div className='pictures-little'>
//             </div>
//         </div>
//     )
// }

// export default Montado;

import { useState } from 'react';
import './Montado.css'

function Montado() {
    const images = [
        '/images/carousel/Carousel1.png',
        '/images/carousel/Carousel2.png',
        '/images/carousel/Carousel5.png',
        '/images/carousel/Carousel4.png',
        '/images/carousel/Carousel3.png',
        '/images/carousel/Carousel6.png',
        '/images/carousel/Carousel7.png',
    ];

    // Estado para la imagen principal seleccionada
    const [selectedImage, setSelectedImage] = useState(images[0]);

    // Función para cambiar la imagen seleccionada
    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    return (
        <div className='carrrusel-wrapper'>
            <div className='picture-big'>
                <img src={selectedImage} alt="artaza-inmo" />
            </div>
            <div className='pictures-little'>
                {images.map((image, index) => (
                    <div 
                        key={index} 
                        className={`picture-thumbnail ${selectedImage === image ? 'active' : ''}`}
                        onClick={() => handleImageClick(image)}
                    >
                        <img src={image} alt={`thumbnail-${index}`} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Montado;