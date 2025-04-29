import React, { useState } from 'react';
import './SellForm.css';

function SellForm() {
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

    // Validar el formulario
    const validateForm = () => {
        let tempErrors = {};
        if (!formData.firstName.trim()) tempErrors.firstName = "First name is required";
        if (!formData.lastName.trim()) tempErrors.lastName = "Last name is required";
        if (!formData.email.trim()) tempErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Email is invalid";
        if (!formData.telephone.trim()) tempErrors.telephone = "Telephone is required";
        if (!formData.addressLine1.trim()) tempErrors.addressLine1 = "Address line 1 is required";
        if (!formData.city.trim()) tempErrors.city = "City/Town is required";
        if (!formData.postcode.trim()) tempErrors.postcode = "Postcode is required";
        if (!formData.lookingToBuy) tempErrors.lookingToBuy = "Please select an option";
        if (!formData.hearAboutUs.trim()) tempErrors.hearAboutUs = "This field is required";
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
        <div className="sell-form-container">
            <h2 className="form-title">Sell with us.</h2>
            <p className="form-description">
                The first step to moving home is a free-market appraisal. Fill in the form below and if your home meets our criteria we will contact you about organising one.
            </p>

            <form onSubmit={handleSubmit} className="sell-form">
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
                                placeholder="First Name"
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
                                placeholder="Last Name"
                            />
                            {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                        </div>
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

                {/* Dirección */}
                <div className="form-section">
                    <h3>Address</h3>
                    
                    <div className="form-group">
                        <label>Address Line 1<span className="required">*</span></label>
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
                        <label>Address Line 2</label>
                        <input
                            type="text"
                            name="addressLine2"
                            value={formData.addressLine2}
                            onChange={handleChange}
                        />
                    </div>
                    
                    <div className="form-group">
                        <label>City / Town<span className="required">*</span></label>
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
                        <label>Postcode<span className="required">*</span></label>
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

                {/* Tamaño aproximado */}
                <div className="form-section">
                    <h3>Approximate Size (sq. ft)</h3>
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
                    <h3>Do you have a price you hope to sell for?</h3>
                    <div className="form-group">
                        <div className="price-input">
                            <span className="currency">$</span>
                            <input
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>

                {/* ¿Buscando comprar también? */}
                <div className="form-section">
                    <h3>Are you also looking to buy in the area?<span className="required">*</span></h3>
                    <div className="radio-group">
                        <label className="radio-label">
                            <input
                                type="radio"
                                name="lookingToBuy"
                                value="yes"
                                checked={formData.lookingToBuy === 'yes'}
                                onChange={handleChange}
                            />
                            Yes
                        </label>
                        <label className="radio-label">
                            <input
                                type="radio"
                                name="lookingToBuy"
                                value="no"
                                checked={formData.lookingToBuy === 'no'}
                                onChange={handleChange}
                            />
                            No
                        </label>
                        <label className="radio-label">
                            <input
                                type="radio"
                                name="lookingToBuy"
                                value="maybe"
                                checked={formData.lookingToBuy === 'maybe'}
                                onChange={handleChange}
                            />
                            Maybe
                        </label>
                    </div>
                    {errors.lookingToBuy && <span className="error-message">{errors.lookingToBuy}</span>}
                </div>

                {/* ¿Cómo supo de nosotros? */}
                <div className="form-section">
                    <h3>How did you hear about us?<span className="required">*</span></h3>
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
                        <span>I accept the Privacy & Cookies Policy and Terms & Conditions</span>
                    </label>
                    {errors.acceptTerms && <span className="error-message">{errors.acceptTerms}</span>}
                </div>

                {/* Botón de Envío */}
                <div className="form-section submit-section">
                    <button type="submit" className="submit-button">Send</button>
                </div>
            </form>
        </div>
    );
}

export default SellForm;