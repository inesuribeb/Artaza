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

    // Estado para controlar la sección actual
    const [currentSection, setCurrentSection] = useState(1);

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

    // Efecto para controlar la clase del header (código existente)
    useEffect(() => {
        if (!isMobile) {
            setHeaderClassName('');
            return;
        }

        const handleScroll = () => {
            if (pictureFormRef.current) {
                const pictureRect = pictureFormRef.current.getBoundingClientRect();
                const headerHeight = 80;

                if (headerHeight < pictureRect.bottom) {
                    setHeaderClassName('white-section-active');
                } else {
                    setHeaderClassName('');
                }
            }
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);

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

    // Validación por sección
    const validateSection = (section) => {
        let tempErrors = {};

        if (section === 1) {
            if (!formData.firstName.trim()) tempErrors.firstName = t('firstNameRequired');
            if (!formData.lastName.trim()) tempErrors.lastName = t('lastNameRequired');
            if (!formData.telephone.trim()) tempErrors.telephone = t('telephoneRequired');
            if (!formData.email.trim()) tempErrors.email = t('emailRequired');
            else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = t('emailInvalid');
        }
        else if (section === 2) {
            if (!formData.maxBudget.trim()) tempErrors.maxBudget = t('maxBudgetRequired');
        }
        else if (section === 3) {
            if (!formData.selling) tempErrors.selling = t('sellingRequired');
        }
        else if (section === 4) {
            if (!formData.acceptTerms) tempErrors.acceptTerms = t('termsRequired');
        }

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    // Avanzar a la siguiente sección
    const goToNextSection = () => {
        if (validateSection(currentSection)) {
            setCurrentSection(prev => prev + 1);
            // Opcional: hacer scroll al inicio del formulario
            window.scrollTo({ top: pictureFormRef.current.offsetTop, behavior: 'smooth' });
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
            console.log("Form submitted:", formData);
            alert("Form submitted successfully!");
            // Opcional: reiniciar formulario o redirigir
        }
    };

    // Renderizar el título y descripción
    const renderHeader = () => (
        <>
            <h2 className="form-title">{t('formTitleBuy')}.</h2>
            <p className="form-description">
                {t('formDescriptionBuy')}
            </p>
        </>
    );

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

    // Renderizar la sección 1: Información personal
    const renderSection1 = () => (
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

    // Renderizar la sección 2: Especificaciones
    const renderSection2 = () => (
        <>
            <div className="form-section">
                {/* <h3>{t('specifications')}</h3> */}

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

    // Renderizar la sección 3: ¿Vendiendo?
    const renderSection3 = () => (
        <>
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

    // Renderizar la sección 4: Otros criterios y términos
    const renderSection4 = () => (
        <>
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
                    {t('submit')}
                </button>
            </div>
        </>
    );

    // Renderizar la sección actual
    const renderCurrentSection = () => {
        switch (currentSection) {
            case 1:
                return renderSection1();
            case 2:
                return renderSection2();
            case 3:
                return renderSection3();
            case 4:
                return renderSection4();
            default:
                return null;
        }
    };

    return (
        <div className='buy-form-wrapper'>
            <div className='picture-form' ref={pictureFormRef}>
                <img src="/images/pruebaform.png" alt="" />
            </div>
            <div className="buy-form-container">
                {renderHeader()}
                {renderProgress()}
                <form className="buy-form">
                    {renderCurrentSection()}
                </form>
            </div>
        </div>
    );
}

export default BuyForm;