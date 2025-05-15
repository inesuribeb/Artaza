import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import EastIcon from '@mui/icons-material/East';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
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
 * @param {string} [props.backgroundColor] - Color de fondo personalizado (opcional)
 * @param {string} [props.textColor] - Color de texto personalizado (opcional)
 * @param {string} [props.borderColor] - Color de borde personalizado (opcional)
 */
function Button({
    translationKey,
    routeName,
    routeParams,
    onClick,
    className = '',
    showIcon = true,
    backgroundColor,
    textColor,
    borderColor
}) {
    const navigate = useNavigate();
    const { t, getRoute } = useLanguage();
    
    const handleClick = () => {
        if (onClick) {
            onClick();
        } else if (routeName) {
            navigate(getRoute(routeName, routeParams || {}));
        }
    };
    
    // Crear estilos inline si se proporcionan colores personalizados
    const buttonStyle = {};
    const beforeStyle = {};
    
    if (backgroundColor) {
        buttonStyle.backgroundColor = backgroundColor;
    }
    
    if (textColor) {
        buttonStyle.color = textColor;
    }
    
    if (borderColor) {
        buttonStyle.borderColor = borderColor;
        beforeStyle.borderColor = borderColor;
    }
    
    return (
        <button
            className={`custom-button ${className}`}
            onClick={handleClick}
            style={buttonStyle}
            data-before-border-color={borderColor || ''} // Atributo data para el pseudo-elemento
        >
            <span dangerouslySetInnerHTML={{ __html: t(translationKey) }}></span>
            {showIcon && (
                <>
                    <span className="button-separator"></span>
                    <ArrowForwardIcon className="button-icon" />
                </>
            )}
        </button>
    );
}

export default Button;