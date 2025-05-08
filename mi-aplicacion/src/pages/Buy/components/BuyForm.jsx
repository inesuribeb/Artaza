import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { useHeaderStyle } from '../../../components/Header/HeaderStyleContext';
import useMediaQuery from '../../../hooks/useMediaQuery';
import './BuyForm.css';

function BuyForm() {
    const { t, getRoute, language } = useLanguage();
    const { setHeaderClassName } = useHeaderStyle();
    const pictureFormRef = useRef(null);
    const isMobile = useMediaQuery('(max-width: 768px)');

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        telephone: '',
        email: '',
        propertyType: 'flat',
        minSize: '',
        bedrooms: '',
        maxBudget: '',
        selling: '',
        otherCriteria: '',
        acceptTerms: false
    });

    const [errors, setErrors] = useState({});

    // Efecto para controlar la clase del header
    useEffect(() => {
        // Solo activamos la detección de intersección si estamos en móvil
        if (!isMobile) {
            // Si no es móvil, nos aseguramos de no tener la clase white-section-active
            setHeaderClassName('');
            return;
        }

        const handleScroll = () => {
            if (pictureFormRef.current) {
                const pictureRect = pictureFormRef.current.getBoundingClientRect();
                const headerHeight = 80; // Ajusta según la altura de tu header en móvil

                // Si la parte inferior del header está por encima de la parte inferior de la imagen
                if (headerHeight < pictureRect.bottom) {
                    setHeaderClassName('white-section-active');
                } else {
                    setHeaderClassName('');
                }
            }
        };

        // Establecer el estilo inicial
        handleScroll();

        // Añadir listeners
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);

        // Limpiar
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
            setHeaderClassName('');
        };
    }, [setHeaderClassName, isMobile]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const validateForm = () => {
        let tempErrors = {};
        if (!formData.firstName.trim()) tempErrors.firstName = t('firstNameRequired');
        if (!formData.lastName.trim()) tempErrors.lastName = t('lastNameRequired');
        if (!formData.telephone.trim()) tempErrors.telephone = t('telephoneRequired');
        if (!formData.email.trim()) tempErrors.email = t('emailRequired');
        else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = t('emailInvalid');
        if (!formData.maxBudget.trim()) tempErrors.maxBudget = t('maxBudgetRequired');
        if (!formData.selling) tempErrors.selling = t('sellingRequired');
        if (!formData.acceptTerms) tempErrors.acceptTerms = t('termsRequired');

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    // Manejar envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form submitted:", formData);
            alert("Form submitted successfully!");
        }
    };

    return (
        <div className='buy-form-wrapper'>
            <div className='picture-form' ref={pictureFormRef}>
                <img src="/images/pruebaform.png" alt="" />
                {/* <img src="/images/ISOTIPO.png" alt="" /> */}
            </div>
            <div className="buy-form-container">
                <h2 className="form-title">{t('formTitleBuy')}.</h2>
                <p className="form-description">
                    {t('formDescriptionBuy')}
                </p>

                <form onSubmit={handleSubmit} className="buy-form">
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

                    {/* Especificaciones */}
                    <div className="form-section">
                        <h3>{t('specifications')}</h3>

                        {/* Tipo de Propiedad */}
                        <div className="form-group">
                            <label>{t('propertyType')}</label>
                            <div className="radio-group">
                                <label className="radio-label">
                                    <input
                                        type="radio"
                                        name="propertyType"
                                        value="flat"
                                        checked={formData.propertyType === 'flat'}
                                        onChange={handleChange}
                                    />
                                    {t('flat')}
                                </label>
                                <label className="radio-label">
                                    <input
                                        type="radio"
                                        name="propertyType"
                                        value="house"
                                        checked={formData.propertyType === 'house'}
                                        onChange={handleChange}
                                    />
                                    {t('house')}
                                </label>
                            </div>
                        </div>

                        {/* Tamaño Mínimo */}
                        <div className="form-group">
                            <label>{t('minSize')}</label>
                            <input
                                type="number"
                                name="minSize"
                                value={formData.minSize}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Número de Dormitorios */}
                        {/* <div className="form-group">
                            <label>{t('bedrooms')}</label>
                            <select
                                name="bedrooms"
                                value={formData.bedrooms}
                                onChange={handleChange}
                            >
                                <option value="">{t('selectBedrooms')}</option>
                                <option value="1">{t('bedroom1')}</option>
                                <option value="2">{t('bedroom2')}</option>
                                <option value="3">{t('bedroom3')}</option>
                                <option value="4">{t('bedroom4')}</option>
                                <option value="5+">{t('bedroom5Plus')}</option>
                            </select>
                        </div> */}
                        {/* Número de Dormitorios */}
                        <div className="form-group">
                            <label>{t('bedrooms')}</label>
                            <select
                                name="bedrooms"
                                value={formData.bedrooms}
                                onChange={handleChange}
                                className={formData.bedrooms === "" ? "select-placeholder" : ""}
                            >
                                <option value="" disabled>{t('selectBedrooms')}</option>
                                <option value="1">{t('bedroom1')}</option>
                                <option value="2">{t('bedroom2')}</option>
                                <option value="3">{t('bedroom3')}</option>
                                <option value="4">{t('bedroom4')}</option>
                                <option value="5+">{t('bedroom5Plus')}</option>
                            </select>
                        </div>

                        {/* Presupuesto Máximo */}
                        <div className="form-group">
                            <label>{t('maxBudget')}<span className="required">*</span></label>
                            <div className="budget-input">
                                <span className="currency">{language === 'es' ? '€' : '£'}</span>
                                <input
                                    type="number"
                                    name="maxBudget"
                                    value={formData.maxBudget}
                                    onChange={handleChange}
                                    className={errors.maxBudget ? "error" : ""}
                                />
                            </div>
                            {errors.maxBudget && <span className="error-message">{errors.maxBudget}</span>}
                        </div>
                    </div>

                    {/* ¿Vendiendo? */}
                    <div className="form-section">
                        <h3>{t('selling')}<span className="required">*</span></h3>
                        <p>{t('sellingDescription')}</p>
                        <div className="radio-group">
                            <label className="radio-label">
                                <input
                                    type="radio"
                                    name="selling"
                                    value="yes"
                                    checked={formData.selling === 'yes'}
                                    onChange={handleChange}
                                />
                                {t('yes')}
                            </label>
                            <label className="radio-label">
                                <input
                                    type="radio"
                                    name="selling"
                                    value="no"
                                    checked={formData.selling === 'no'}
                                    onChange={handleChange}
                                />
                                {t('no')}
                            </label>
                        </div>
                        {errors.selling && <span className="error-message">{errors.selling}</span>}
                    </div>

                    {/* Otros Criterios */}
                    <div className="form-section">
                        <h3>{t('otherCriteria')}</h3>
                        <p>{t('otherCriteriaDescription')}</p>
                        <div className="form-group">
                            <textarea
                                name="otherCriteria"
                                value={formData.otherCriteria}
                                onChange={handleChange}
                                rows="4"
                            ></textarea>
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

                    {/* Botón de Envío */}
                    <div className="form-section submit-section">
                        <button type="submit" className="submit-button">{t('submit')}</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default BuyForm;