import { useState } from 'react';
import './BuyForm.css';

function BuyForm() {
    // Estado para manejar los valores del formulario
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        telephone: '',
        email: '',
        propertyType: 'flat', // Valor por defecto
        minSize: '',
        bedrooms: '',
        maxBudget: '',
        selling: '',
        otherCriteria: '',
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

    // Validar el formulario
    const validateForm = () => {
        let tempErrors = {};
        if (!formData.firstName.trim()) tempErrors.firstName = "First name is required";
        if (!formData.lastName.trim()) tempErrors.lastName = "Last name is required";
        if (!formData.telephone.trim()) tempErrors.telephone = "Telephone is required";
        if (!formData.email.trim()) tempErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Email is invalid";
        if (!formData.maxBudget.trim()) tempErrors.maxBudget = "Maximum budget is required";
        if (!formData.selling) tempErrors.selling = "Please select an option";
        if (!formData.acceptTerms) tempErrors.acceptTerms = "You must accept the terms";
        
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    // Manejar envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Aquí puedes enviar el formulario a tu backend
            console.log("Form submitted:", formData);
            // Reset form or show success message
            alert("Form submitted successfully!");
        }
    };

    return (
        <div className="buy-form-container">
            <h2 className="form-title">Register to buy.</h2>
            <p className="form-description">
                If you would like us to inform you about new properties that fit your specifications, please fill out the form below.
            </p>

            <form onSubmit={handleSubmit} className="buy-form">
                {/* Nombre */}
                <div className="form-section">
                    <h3>Name<span className="required">*</span></h3>
                    <div className="name-fields">
                        <div className="form-group">
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className={errors.firstName ? "error" : ""}
                            />
                            <label>First Name</label>
                            {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className={errors.lastName ? "error" : ""}
                            />
                            <label>Last Name</label>
                            {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                        </div>
                    </div>
                </div>

                {/* Teléfono */}
                <div className="form-section">
                    <h3>Telephone<span className="required">*</span></h3>
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
                    <h3>Email<span className="required">*</span></h3>
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
                    <h3>Specifications</h3>
                    
                    {/* Tipo de Propiedad */}
                    <div className="form-group">
                        <label>Property Type</label>
                        <div className="radio-group">
                            <label className="radio-label">
                                <input
                                    type="radio"
                                    name="propertyType"
                                    value="flat"
                                    checked={formData.propertyType === 'flat'}
                                    onChange={handleChange}
                                />
                                Flat
                            </label>
                            <label className="radio-label">
                                <input
                                    type="radio"
                                    name="propertyType"
                                    value="house"
                                    checked={formData.propertyType === 'house'}
                                    onChange={handleChange}
                                />
                                House
                            </label>
                        </div>
                    </div>

                    {/* Tamaño Mínimo */}
                    <div className="form-group">
                        <label>Minimum Size (sq. ft)</label>
                        <input
                            type="number"
                            name="minSize"
                            value={formData.minSize}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Número de Dormitorios */}
                    <div className="form-group">
                        <label>No. Bedrooms</label>
                        <select
                            name="bedrooms"
                            value={formData.bedrooms}
                            onChange={handleChange}
                        >
                            <option value="">Select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5+">5+</option>
                        </select>
                    </div>

                    {/* Presupuesto Máximo */}
                    <div className="form-group">
                        <label>Maximum Budget<span className="required">*</span></label>
                        <div className="budget-input">
                            <span className="currency">£</span>
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
                    <h3>Selling?<span className="required">*</span></h3>
                    <p>Are you looking to sell a property as well?</p>
                    <div className="radio-group">
                        <label className="radio-label">
                            <input
                                type="radio"
                                name="selling"
                                value="yes"
                                checked={formData.selling === 'yes'}
                                onChange={handleChange}
                            />
                            Yes
                        </label>
                        <label className="radio-label">
                            <input
                                type="radio"
                                name="selling"
                                value="no"
                                checked={formData.selling === 'no'}
                                onChange={handleChange}
                            />
                            No
                        </label>
                    </div>
                    {errors.selling && <span className="error-message">{errors.selling}</span>}
                </div>

                {/* Otros Criterios */}
                <div className="form-section">
                    <h3>Other Criteria</h3>
                    <p>Criteria that could help us find the right property.</p>
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
                        <span>I accept the Privacy & Cookies Policy and Terms & Conditions</span>
                    </label>
                    {errors.acceptTerms && <span className="error-message">{errors.acceptTerms}</span>}
                </div>

                {/* Botón de Envío */}
                <div className="form-section submit-section">
                    <button type="submit" className="submit-button">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default BuyForm;