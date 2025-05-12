// import { useState } from 'react';
// import { useLanguage } from '../../../contexts/LanguageContext';
// import './SellForm.css';

// function SellForm() {
//     const { t, getRoute, language } = useLanguage();

//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         telephone: '',
//         addressLine1: '',
//         addressLine2: '',
//         city: '',
//         postcode: '',
//         size: '',
//         price: '',
//         lookingToBuy: '',
//         hearAboutUs: '',
//         acceptTerms: false
//     });

//     const [errors, setErrors] = useState({});

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setFormData({
//             ...formData,
//             [name]: type === 'checkbox' ? checked : value
//         });
//     };

//     const validateForm = () => {
//         let tempErrors = {};
//         if (!formData.firstName.trim()) tempErrors.firstName = t('firstNameRequired');
//         if (!formData.lastName.trim()) tempErrors.lastName = t('lastNameRequired');
//         if (!formData.email.trim()) tempErrors.email = t('emailRequired');
//         else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = t('emailInvalid');
//         if (!formData.telephone.trim()) tempErrors.telephone = t('telephoneRequired');
//         if (!formData.addressLine1.trim()) tempErrors.addressLine1 = t('addressLine1Required');
//         if (!formData.city.trim()) tempErrors.city = t('cityRequired');
//         if (!formData.postcode.trim()) tempErrors.postcode = t('postcodeRequired');
//         if (!formData.lookingToBuy) tempErrors.lookingToBuy = t('lookingToBuyRequired');
//         if (!formData.hearAboutUs.trim()) tempErrors.hearAboutUs = t('hearAboutUsRequired');
//         if (!formData.acceptTerms) tempErrors.acceptTerms = t('termsRequired');
        
//         setErrors(tempErrors);
//         return Object.keys(tempErrors).length === 0;
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (validateForm()) {
//             console.log("Form submitted:", formData);
//             alert("Form submitted successfully!");
//         }
//     };

//     return (
//         <div className="sell-form-container">
//             <h2 className="form-title-sell">{t('formTitle')}.</h2>
//             <p className="form-description-sell">
//                 {t('formDescription')}
//             </p>

//             <form onSubmit={handleSubmit} className="sell-form-sell">
//                 <div className="form-section">
//                     <h3>{t('name')}<span className="required">*</span></h3>
//                     <div className="name-fields">
//                         <div className="form-group">
//                             <input
//                                 type="text"
//                                 name="firstName"
//                                 value={formData.firstName}
//                                 onChange={handleChange}
//                                 className={errors.firstName ? "error" : ""}
//                                 placeholder={t('firstName')}
//                             />
//                             {errors.firstName && <span className="error-message">{errors.firstName}</span>}
//                         </div>
//                         <div className="form-group">
//                             <input
//                                 type="text"
//                                 name="lastName"
//                                 value={formData.lastName}
//                                 onChange={handleChange}
//                                 className={errors.lastName ? "error" : ""}
//                                 placeholder={t('lastName')}
//                             />
//                             {errors.lastName && <span className="error-message">{errors.lastName}</span>}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Email */}
//                 <div className="form-section">
//                     <h3>{t('email')}<span className="required">*</span></h3>
//                     <div className="form-group">
//                         <input
//                             type="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             className={errors.email ? "error" : ""}
//                         />
//                         {errors.email && <span className="error-message">{errors.email}</span>}
//                     </div>
//                 </div>

//                 <div className="form-section">
//                     <h3>{t('telephone')}<span className="required">*</span></h3>
//                     <div className="form-group">
//                         <input
//                             type="tel"
//                             name="telephone"
//                             value={formData.telephone}
//                             onChange={handleChange}
//                             className={errors.telephone ? "error" : ""}
//                         />
//                         {errors.telephone && <span className="error-message">{errors.telephone}</span>}
//                     </div>
//                 </div>

//                 <div className="form-section">
                    
//                     <div className="form-group">
//                         <label>{t('addressLine1')}<span className="required">*</span></label>
//                         <input
//                             type="text"
//                             name="addressLine1"
//                             value={formData.addressLine1}
//                             onChange={handleChange}
//                             className={errors.addressLine1 ? "error" : ""}
//                         />
//                         {errors.addressLine1 && <span className="error-message">{errors.addressLine1}</span>}
//                     </div>
                    
//                     <div className="form-group">
//                         <label>{t('cityTown')}<span className="required">*</span></label>
//                         <input
//                             type="text"
//                             name="city"
//                             value={formData.city}
//                             onChange={handleChange}
//                             className={errors.city ? "error" : ""}
//                         />
//                         {errors.city && <span className="error-message">{errors.city}</span>}
//                     </div>
                    
//                     <div className="form-group">
//                         <label>{t('postcode')}<span className="required">*</span></label>
//                         <input
//                             type="text"
//                             name="postcode"
//                             value={formData.postcode}
//                             onChange={handleChange}
//                             className={errors.postcode ? "error" : ""}
//                         />
//                         {errors.postcode && <span className="error-message">{errors.postcode}</span>}
//                     </div>
//                 </div>

//                 <div className="form-section">
//                     <h3>{t('approximateSize')}</h3>
//                     <div className="form-group">
//                         <input
//                             type="number"
//                             name="size"
//                             value={formData.size}
//                             onChange={handleChange}
//                         />
//                     </div>
//                 </div>

//                 <div className="form-section">
//                     <h3>{t('hopePrice')}</h3>
//                     <div className="form-group">
//                         <div className="price-input">
//                             <span className="currency">{language === 'es' ? '€' : '£'}</span>
//                             <input
//                                 type="number"
//                                 name="price"
//                                 value={formData.price}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                     </div>
//                 </div>

//                 <div className="form-section">
//                     <h3>{t('lookingToBuy')}<span className="required">*</span></h3>
//                     <div className="radio-group">
//                         <label className="radio-label">
//                             <input
//                                 type="radio"
//                                 name="lookingToBuy"
//                                 value="yes"
//                                 checked={formData.lookingToBuy === 'yes'}
//                                 onChange={handleChange}
//                             />
//                             {t('yes')}
//                         </label>
//                         <label className="radio-label">
//                             <input
//                                 type="radio"
//                                 name="lookingToBuy"
//                                 value="no"
//                                 checked={formData.lookingToBuy === 'no'}
//                                 onChange={handleChange}
//                             />
//                             {t('no')}
//                         </label>
//                         <label className="radio-label">
//                             <input
//                                 type="radio"
//                                 name="lookingToBuy"
//                                 value="maybe"
//                                 checked={formData.lookingToBuy === 'maybe'}
//                                 onChange={handleChange}
//                             />
//                             {t('maybe')}
//                         </label>
//                     </div>
//                     {errors.lookingToBuy && <span className="error-message">{errors.lookingToBuy}</span>}
//                 </div>

//                 <div className="form-section">
//                     <h3>{t('hearAboutUs')}<span className="required">*</span></h3>
//                     <div className="form-group">
//                         <textarea
//                             name="hearAboutUs"
//                             value={formData.hearAboutUs}
//                             onChange={handleChange}
//                             rows="3"
//                             className={errors.hearAboutUs ? "error" : ""}
//                         ></textarea>
//                         {errors.hearAboutUs && <span className="error-message">{errors.hearAboutUs}</span>}
//                     </div>
//                 </div>

//                 <div className="form-section terms-section">
//                     <label className="checkbox-label">
//                         <input
//                             type="checkbox"
//                             name="acceptTerms"
//                             checked={formData.acceptTerms}
//                             onChange={handleChange}
//                             className={errors.acceptTerms ? "error" : ""}
//                         />
//                         <span className='acceptTerms'>{t('acceptTerms')}</span>
//                     </label>
//                     {errors.acceptTerms && <span className="error-message">{errors.acceptTerms}</span>}
//                 </div>

//                 <div className="form-section submit-section">
//                     <button type="submit" className="submit-button">{t('send')}</button>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default SellForm;

import { useState } from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import './SellForm.css';

function SellForm() {
    const { t, getRoute, language } = useLanguage();

    // Estado para manejar la sección actual
    const [currentSection, setCurrentSection] = useState(1);

    // Estado para manejar los valores del formulario
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        telephone: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        postcode: '',
        size: '',
        price: '',
        lookingToBuy: '',
        hearAboutUs: '',
        acceptTerms: false
    });

    // Estado para errores de validación
    const [errors, setErrors] = useState({});

    // Manejar cambios en los campos del formulario
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    // Validar sección específica
    const validateSection = (section) => {
        let tempErrors = {};
        
        if (section === 1) {
            if (!formData.firstName.trim()) tempErrors.firstName = t('firstNameRequired');
            if (!formData.lastName.trim()) tempErrors.lastName = t('lastNameRequired');
            if (!formData.email.trim()) tempErrors.email = t('emailRequired');
            else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = t('emailInvalid');
            if (!formData.telephone.trim()) tempErrors.telephone = t('telephoneRequired');
        } 
        else if (section === 2) {
            if (!formData.addressLine1.trim()) tempErrors.addressLine1 = t('addressLine1Required');
            if (!formData.city.trim()) tempErrors.city = t('cityRequired');
            if (!formData.postcode.trim()) tempErrors.postcode = t('postcodeRequired');
        }
        else if (section === 3) {
            // No hay campos obligatorios en esta sección
        }
        else if (section === 4) {
            if (!formData.lookingToBuy) tempErrors.lookingToBuy = t('lookingToBuyRequired');
            if (!formData.hearAboutUs.trim()) tempErrors.hearAboutUs = t('hearAboutUsRequired');
            if (!formData.acceptTerms) tempErrors.acceptTerms = t('termsRequired');
        }
        
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    // Ir a la siguiente sección
    const goToNextSection = () => {
        if (validateSection(currentSection)) {
            setCurrentSection(prev => prev + 1);
            // Opcional: Hacer scroll al inicio del formulario
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    // Volver a la sección anterior
    const goToPrevSection = () => {
        setCurrentSection(prev => prev - 1);
    };

    // Manejar envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateSection(4)) {
            // Aquí puedes enviar el formulario a tu backend
            console.log("Form submitted:", formData);
            // Reset form or show success message
            alert("Form submitted successfully!");
        }
    };

    // Renderizar el indicador de progreso
    const renderProgress = () => (
        <div className="form-progress-container">
            <div className="form-progress-fraction">
                {currentSection}/4
            </div>
            <div className="form-progress-bar">
                <div 
                    className="progress-fill" 
                    style={{ width: `${(currentSection / 4) * 100}%` }}
                ></div>
            </div>
        </div>
    );

    // Renderizar la sección actual
    const renderCurrentSection = () => {
        switch (currentSection) {
            case 1:
                return (
                    <>
                        {/* Nombre */}
                        <div className="form-section">
                            <h3>{t('name')}<span className="required">*</span></h3>
                            <div className="name-fields">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className={errors.firstName ? "error" : ""}
                                        placeholder={t('firstName')}
                                    />
                                    {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className={errors.lastName ? "error" : ""}
                                        placeholder={t('lastName')}
                                    />
                                    {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                                </div>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="form-section">
                            <h3>{t('email')}<span className="required">*</span></h3>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={errors.email ? "error" : ""}
                                />
                                {errors.email && <span className="error-message">{errors.email}</span>}
                            </div>
                        </div>

                        {/* Teléfono */}
                        <div className="form-section">
                            <h3>{t('telephone')}<span className="required">*</span></h3>
                            <div className="form-group">
                                <input
                                    type="tel"
                                    name="telephone"
                                    value={formData.telephone}
                                    onChange={handleChange}
                                    className={errors.telephone ? "error" : ""}
                                />
                                {errors.telephone && <span className="error-message">{errors.telephone}</span>}
                            </div>
                        </div>

                        <div className="form-navigation">
                            <button 
                                type="button" 
                                className="submit-button next-button"
                                onClick={goToNextSection}
                            >
                                {t('next')}
                            </button>
                        </div>
                    </>
                );
            case 2:
                return (
                    <>
                        {/* Dirección */}
                        <div className="form-section">
                            <div className="form-group">
                                <label>{t('addressLine1')}<span className="required">*</span></label>
                                <input
                                    type="text"
                                    name="addressLine1"
                                    value={formData.addressLine1}
                                    onChange={handleChange}
                                    className={errors.addressLine1 ? "error" : ""}
                                />
                                {errors.addressLine1 && <span className="error-message">{errors.addressLine1}</span>}
                            </div>
                            
                            <div className="form-group">
                                <label>{t('cityTown')}<span className="required">*</span></label>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    className={errors.city ? "error" : ""}
                                />
                                {errors.city && <span className="error-message">{errors.city}</span>}
                            </div>
                            
                            <div className="form-group">
                                <label>{t('postcode')}<span className="required">*</span></label>
                                <input
                                    type="text"
                                    name="postcode"
                                    value={formData.postcode}
                                    onChange={handleChange}
                                    className={errors.postcode ? "error" : ""}
                                />
                                {errors.postcode && <span className="error-message">{errors.postcode}</span>}
                            </div>
                        </div>

                        <div className="form-navigation">
                            <button 
                                type="button" 
                                className="back-button"
                                onClick={goToPrevSection}
                            >
                                {t('back')}
                            </button>
                            <button 
                                type="button" 
                                className="submit-button next-button"
                                onClick={goToNextSection}
                            >
                                {t('next')}
                            </button>
                        </div>
                    </>
                );
            case 3:
                return (
                    <>
                        {/* Tamaño aproximado */}
                        <div className="form-section">
                            <h3>{t('approximateSize')}</h3>
                            <div className="form-group">
                                <input
                                    type="number"
                                    name="size"
                                    value={formData.size}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        {/* Precio esperado */}
                        <div className="form-section">
                            <h3>{t('hopePrice')}</h3>
                            <div className="form-group">
                                <div className="price-input">
                                    <span className="currency">{language === 'es' ? '€' : '£'}</span>
                                    <input
                                        type="number"
                                        name="price"
                                        value={formData.price}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="form-navigation">
                            <button 
                                type="button" 
                                className="back-button"
                                onClick={goToPrevSection}
                            >
                                {t('back')}
                            </button>
                            <button 
                                type="button" 
                                className="submit-button next-button"
                                onClick={goToNextSection}
                            >
                                {t('next')}
                            </button>
                        </div>
                    </>
                );
            case 4:
                return (
                    <>
                        {/* ¿Buscando comprar también? */}
                        <div className="form-section">
                            <h3>{t('lookingToBuy')}<span className="required">*</span></h3>
                            <div className="radio-group">
                                <label className="radio-label">
                                    <input
                                        type="radio"
                                        name="lookingToBuy"
                                        value="yes"
                                        checked={formData.lookingToBuy === 'yes'}
                                        onChange={handleChange}
                                    />
                                    {t('yes')}
                                </label>
                                <label className="radio-label">
                                    <input
                                        type="radio"
                                        name="lookingToBuy"
                                        value="no"
                                        checked={formData.lookingToBuy === 'no'}
                                        onChange={handleChange}
                                    />
                                    {t('no')}
                                </label>
                                <label className="radio-label">
                                    <input
                                        type="radio"
                                        name="lookingToBuy"
                                        value="maybe"
                                        checked={formData.lookingToBuy === 'maybe'}
                                        onChange={handleChange}
                                    />
                                    {t('maybe')}
                                </label>
                            </div>
                            {errors.lookingToBuy && <span className="error-message">{errors.lookingToBuy}</span>}
                        </div>

                        {/* ¿Cómo supo de nosotros? */}
                        <div className="form-section">
                            <h3>{t('hearAboutUs')}<span className="required">*</span></h3>
                            <div className="form-group">
                                <textarea
                                    name="hearAboutUs"
                                    value={formData.hearAboutUs}
                                    onChange={handleChange}
                                    rows="3"
                                    className={errors.hearAboutUs ? "error" : ""}
                                ></textarea>
                                {errors.hearAboutUs && <span className="error-message">{errors.hearAboutUs}</span>}
                            </div>
                        </div>

                        {/* Aceptar Términos */}
                        <div className="form-section terms-section">
                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    name="acceptTerms"
                                    checked={formData.acceptTerms}
                                    onChange={handleChange}
                                    className={errors.acceptTerms ? "error" : ""}
                                />
                                <span className='acceptTerms'>{t('acceptTerms')}</span>
                            </label>
                            {errors.acceptTerms && <span className="error-message">{errors.acceptTerms}</span>}
                        </div>

                        <div className="form-navigation">
                            <button 
                                type="button" 
                                className="back-button"
                                onClick={goToPrevSection}
                            >
                                {t('back')}
                            </button>
                            <button 
                                type="submit" 
                                className="submit-button"
                                onClick={handleSubmit}
                            >
                                {t('send')}
                            </button>
                        </div>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className="sell-form-container">
            <h2 className="form-title-sell">{t('formTitle')}.</h2>
            <p className="form-description-sell">
                {t('formDescription')}
            </p>

            {renderProgress()}
            
            <form className="sell-form-sell">
                {renderCurrentSection()}
            </form>
        </div>
    );
}

export default SellForm;