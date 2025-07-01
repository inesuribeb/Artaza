import { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { translations as footerTranslations } from './FooterContent'
import { homeTranslations } from './HomeContent';
import { PropertyCartContent } from './PropertyCartContent'
import { IndividualHome } from './IndividualHome';
import { filterContent } from './FilterContent';
import { contactContent } from './ContactContent';
import { buyFormContent } from './BuyFormContent';
import { sellFormContent } from './SellFormContent';
import { PrivacidadContent } from './PrivacidadContent';
import { CookiesContent } from './CookiesContent';
import { ModalTranslations } from './ModalContent';

// Definimos las traducciones
const translations = {
  en: {
    home: "Home",
    properties: "Properties",
    property: "Property",
    buy: "Buy",
    sell: "Sell",
    contact: "Contact",
    south: "A Nod to the South",
    privacy: "Privacy",
    cookies: "Cookies",
    ...footerTranslations.en,
    ...homeTranslations.en,
    ...PropertyCartContent.en,
    ...IndividualHome.en,
    ...filterContent.en,
    ...contactContent.en,
    ...buyFormContent.en,
    ...sellFormContent.en,
    ...PrivacidadContent.en,
    ...CookiesContent.en,
    ...ModalTranslations.en,
    // Añade más traducciones según necesites
  },
  es: {
    home: "Inicio",
    properties: "Propiedades",
    property: "Propiedad",
    buy: "Comprar",
    sell: "Vender",
    contact: "Contacto",
    south: "Un Guiño al Sur",
    privacy: "Privacidad",
    cookies: "Cookies",
    ...footerTranslations.es,
    ...homeTranslations.es,
    ...PropertyCartContent.es,
    ...IndividualHome.es,
    ...filterContent.es,
    ...contactContent.es,
    ...buyFormContent.es,
    ...sellFormContent.es,
    ...PrivacidadContent.es,
    ...CookiesContent.es,
    // ...CookiesContent.es,
    ...ModalTranslations.es,
    // Añade más traducciones según necesites
  }
};

// Definimos las rutas base para cada idioma
const routes = {
  en: {
    home: "/home",
    properties: "/properties",
    property: "/property",
    buy: "/buy",
    sell: "/sell",
    contact: "/contact",
    south: "/south",
    privacy: "/privacy",
    cookies: "/cookies-en"
  },
  es: {
    home: "/inicio",
    properties: "/propiedades",
    property: "/propiedad",
    buy: "/comprar",
    sell: "/vender",
    contact: "/contacto",
    south: "/sur",
    privacy: "/privacidad",
    cookies: "/cookies-es"
  }
};

// Mapa de rutas para conversión entre idiomas
const routeMap = {
  // Español a inglés
  "/inicio": "/home",
  "/propiedades": "/properties",
  "/propiedad": "/property",
  "/comprar": "/buy",
  "/vender": "/sell",
  "/contacto": "/contact",
  "/sur": "/south",
  "/privacidad": "/privacy",
  "/cookies-es": "/cookies-en",

  // Inglés a español
  "/home": "/inicio",
  "/properties": "/propiedades",
  "/property": "/propiedad",
  "/buy": "/comprar",
  "/sell": "/vender",
  "/contact": "/contacto",
  "/south": "/sur",
  "/privacy": "/privacidad",
  "/cookies-en": "/cookies-es",
};

// Función para detectar el idioma desde la URL
const detectLanguageFromPath = (path) => {
  // Extraer primer segmento de la ruta
  const firstSegment = '/' + path.split('/')[1];

  // Verificar si es una ruta en español
  const isSpanishRoute = Object.values(routes.es).some(route =>
    firstSegment === route || firstSegment.startsWith(route + '/')
  );

  // Verificar si es una ruta en inglés
  const isEnglishRoute = Object.values(routes.en).some(route =>
    firstSegment === route || firstSegment.startsWith(route + '/')
  );

  if (isSpanishRoute && !isEnglishRoute) return 'es';
  if (isEnglishRoute && !isSpanishRoute) return 'en';

  // Por defecto devolvemos español
  return 'es';
};

// Creamos el contexto
const LanguageContext = createContext();

// Proveedor del contexto
export const LanguageProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Inicializar el idioma basado en la URL actual
  const [language, setLanguage] = useState(() => {
    return detectLanguageFromPath(location.pathname);
  });

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

    // Primero navegar a la nueva ruta
    navigate(redirectPath);

    // Después actualizar el estado del idioma
    setLanguage(newLanguage);
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

  // Efecto para mantener sincronizado el idioma con la URL
  useEffect(() => {
    const detectedLanguage = detectLanguageFromPath(location.pathname);
    if (detectedLanguage !== language) {
      setLanguage(detectedLanguage);
    }
  }, [location.pathname, language]);

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