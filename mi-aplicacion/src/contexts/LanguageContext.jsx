import { createContext, useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// Definimos las traducciones
const translations = {
  en: {
    home: "Home",
    properties: "Properties",
    property: "Property",
    buy: "Buy",
    sell: "Sell", 
    contact: "Contact",
    // Añade más traducciones según necesites
  },
  es: {
    home: "Inicio",
    properties: "Propiedades",
    property: "Propiedad",
    buy: "Comprar",
    sell: "Vender",
    contact: "Contacto",
    // Añade más traducciones según necesites
  }
};

// Definimos las rutas base para cada idioma
const routes = {
  en: {
    home: "/home",
    properties: "/properties",
    property: "/property", // Base para /property/:id
    buy: "/buy",
    sell: "/sell",
    contact: "/contact"
  },
  es: {
    home: "/home",
    properties: "/propiedades",
    property: "/propiedad", // Base para /propiedad/:id
    buy: "/comprar",
    sell: "/vender",
    contact: "/contacto"
  }
};

// Mapa de rutas para conversión entre idiomas
const routeMap = {
  // Español a inglés
  "/home": "/home",
  "/propiedades": "/properties",
  "/propiedad": "/property",
  "/comprar": "/buy", 
  "/vender": "/sell",
  "/contacto": "/contact",
  
  // Inglés a español
  "/properties": "/propiedades",
  "/property": "/propiedad",
  "/buy": "/comprar",
  "/sell": "/vender",
  "/contact": "/contacto"
};

// Creamos el contexto
const LanguageContext = createContext();

// Proveedor del contexto
export const LanguageProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [language, setLanguage] = useState('es'); // Español por defecto
  
  // Función para cambiar el idioma y redirigir
  const toggleLanguage = () => {
    const newLanguage = language === 'es' ? 'en' : 'es';
    
    // Obtener la ruta actual y ver si necesitamos redirigir
    const currentPath = location.pathname;
    
    // Extraer la ruta base y parámetros
    const segments = currentPath.split('/');
    const basePath = segments.length > 1 ? `/${segments[1]}` : '/home';
    const params = segments.slice(2).join('/');
    
    // Encontrar la ruta equivalente en el otro idioma
    let newPath = routeMap[basePath];
    
    // Si no encontramos una equivalencia directa, mantener la misma ruta
    if (!newPath) {
      newPath = basePath;
    }
    
    // Reconstruir la ruta completa con los parámetros
    const redirectPath = params ? `${newPath}/${params}` : newPath;
    
    // Actualizar el estado del idioma
    setLanguage(newLanguage);
    
    // Redirigir a la nueva ruta
    navigate(redirectPath);
  };
  
  // Función para obtener una traducción
  const t = (key) => {
    return translations[language][key] || key;
  };
  
  // Función para generar rutas según el idioma actual
  const getRoute = (routeName, params = {}) => {
    // Obtenemos la ruta base según el idioma y nombre de ruta
    const baseRoute = routes[language][routeName];
    
    if (!baseRoute) {
      console.warn(`No existe la ruta '${routeName}' para el idioma '${language}'`);
      return '/home';
    }
    
    // Si tenemos un ID, lo añadimos a la ruta
    if (params.id !== undefined) {
      return `${baseRoute}/${params.id}`;
    }
    
    return baseRoute;
  };
  
  return (
    <LanguageContext.Provider value={{ 
      language, 
      toggleLanguage, 
      t,
      getRoute,
      routes
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook para usar el contexto fácilmente
export const useLanguage = () => useContext(LanguageContext);

export default LanguageContext;