// src/hooks/useVisibilityAnimation.js
import { useMemo } from 'react';

/**
 * Hook personalizado que gestiona las clases de animación basadas en la visibilidad
 * @param {string} componentId - ID único del componente
 * @param {Object} visibleSections - Objeto con los estados de visibilidad de todas las secciones
 * @param {Object} options - Opciones de configuración adicionales
 * @returns {Object} - Objeto con propiedades útiles para la animación
 */
export function useVisibilityAnimation(componentId, visibleSections, options = {}) {
  const {
    baseClass = 'fade-in-active',
    position = null, // 'left', 'right', 'center', 'bottom', etc.
    customClasses = [],
    delayMultiplier = 1
  } = options;

  return useMemo(() => {
    const isVisible = visibleSections[componentId] || false;
    
    // Construir la lista de clases CSS basadas en las opciones
    const classList = [];
    
    if (isVisible) {
      // Añadir la clase base de animación
      classList.push(baseClass);
      
      // Añadir clase de posición si está especificada
      if (position) {
        classList.push(`${position}-content`);
      }
      
      // Añadir clases personalizadas
      if (customClasses.length > 0) {
        classList.push(...customClasses);
      }
    }
    
    // Generar el string de clases
    const className = classList.join(' ');
    
    // Generar un estilo para el delay si el multiplicador es diferente de 1
    const style = delayMultiplier !== 1 
      ? { animationDelay: `${0.2 * delayMultiplier}s` } 
      : {};
    
    return {
      isVisible,
      className,
      style,
      // Método de utilidad para combinar con clases existentes
      getClassNames: (existingClasses) => `${existingClasses} ${className}`.trim()
    };
  }, [visibleSections, componentId, baseClass, position, customClasses, delayMultiplier]);
}

export default useVisibilityAnimation;