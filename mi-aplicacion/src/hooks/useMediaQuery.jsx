import { useState, useEffect } from 'react';

// Hook personalizado para detectar media queries
function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    
    // Función para actualizar el estado
    const updateMatch = () => setMatches(media.matches);
    
    // Configuración inicial
    updateMatch();
    
    // Añadir listener para cambios (por ejemplo, cuando el usuario gira el dispositivo)
    media.addEventListener('change', updateMatch);
    
    // Limpieza
    return () => {
      media.removeEventListener('change', updateMatch);
    };
  }, [query]);

  return matches;
}

export default useMediaQuery;