const ArrowSvg = ({ 
    color = '#b8aa8e', 
    width = '100%', // Cambiado a porcentaje por defecto
    height, // Nueva prop para altura
    className, 
    style, 
    direction = 'left' 
  }) => {
    // Determinar la transformación basada en la dirección
    const transform = direction === 'right' ? 'scale(-1, 1)' : '';
    
    // Calcular altura si no se proporciona
    const calculatedHeight = height || 'auto';
    
    return (
      <svg 
        width={width} 
        height={calculatedHeight}
        viewBox="0 0 120 18" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={{
          ...style, 
          maxWidth: '100%', // Asegura que no se desborde
          display: 'block' // Mejora la forma en que se renderiza
        }}
        preserveAspectRatio="xMidYMid meet" // Mantiene la proporción y centra
      >
        <g transform={transform}>
          {/* Línea principal horizontal */}
          <line 
            x1="10" 
            y1="9" 
            x2="120" 
            y2="9" 
            stroke={color} 
            strokeWidth="2" 
            strokeLinecap="round"
          />
          
          {/* Punta de flecha con curvas suaves y ángulo pequeño */}
          <path
            d="M10 9C10 9 4 9 2 9C2 9 5 6 6 3M10 9C10 9 4 9 2 9C2 9 5 12 6 15"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>
      </svg>
    );
  };
  
  export default ArrowSvg;