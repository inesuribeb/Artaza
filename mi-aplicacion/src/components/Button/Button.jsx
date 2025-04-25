import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import EastIcon from '@mui/icons-material/East';
import './Button.css';

/**
 * Componente de botón reutilizable con estilo consistente e icono
 * @param {Object} props - Propiedades del componente
 * @param {string} props.translationKey - Clave de traducción para el texto del botón
 * @param {string} [props.routeName] - Nombre de la ruta a la que navegar (opcional)
 * @param {Object} [props.routeParams] - Parámetros para la ruta (opcional)
 * @param {function} [props.onClick] - Función personalizada para el clic (opcional)
 * @param {string} [props.className] - Clases CSS adicionales (opcional)
 * @param {boolean} [props.showIcon=true] - Muestra u oculta el icono (opcional)
 */
function Button({
    translationKey,
    routeName,
    routeParams,
    onClick,
    className = '',
    showIcon = true
}) {
    const navigate = useNavigate();
    const { t, getRoute } = useLanguage();
    
    // Manejar el evento de clic
    const handleClick = () => {
        if (onClick) {
            // Si se proporcionó una función onClick personalizada, la usamos
            onClick();
        } else if (routeName) {
            // Si se proporcionó un nombre de ruta, navegamos a esa ruta
            navigate(getRoute(routeName, routeParams || {}));
        }
    };
    
    return (
        <button
            className={`custom-button ${className}`}
            onClick={handleClick}
        >
            <span dangerouslySetInnerHTML={{ __html: t(translationKey) }}></span>
            {showIcon && (
                <>
                    <span className="button-separator"></span>
                    <EastIcon className="button-icon" />
                </>
            )}
        </button>
    );
}

export default Button;