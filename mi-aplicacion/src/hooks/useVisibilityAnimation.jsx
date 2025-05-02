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
    position = null, 
    customClasses = [],
    delayMultiplier = 1
  } = options;

  return useMemo(() => {
    const isVisible = visibleSections[componentId] || false;
    
    const classList = [];
    
    if (isVisible) {
      classList.push(baseClass);
      
      if (position) {
        classList.push(`${position}-content`);
      }
      
      if (customClasses.length > 0) {
        classList.push(...customClasses);
      }
    }
    
    const className = classList.join(' ');
    
    const style = delayMultiplier !== 1 
      ? { animationDelay: `${0.2 * delayMultiplier}s` } 
      : {};
    
    return {
      isVisible,
      className,
      style,
      getClassNames: (existingClasses) => `${existingClasses} ${className}`.trim()
    };
  }, [visibleSections, componentId, baseClass, position, customClasses, delayMultiplier]);
}

export default useVisibilityAnimation;