import { useLocation, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useLanguage } from "../../contexts/LanguageContext";
import Button from '../Button/Button'
import './Modal.css'

function Modal({ onClose }) {
    const { language, toggleLanguage, t, getRoute } = useLanguage();
    const navigate = useNavigate();

    const handleNavigation = (routeName) => {
        navigate(getRoute(routeName));
        if (onClose) {
            onClose(); // Cerrar el modal después de navegar
        }
    };

    return (
        <div className="modal-content">
            <h1>{t('modalTitle')}</h1>
            <div className="modal-buttons">
                <Button
                    translationKey="northModal"
                    routeName="properties"
                    onClick={() => handleNavigation('properties')}
                />
                <Button
                    translationKey="southModal"
                    routeName="south"
                    onClick={() => handleNavigation('south')}
                />
            </div>
        </div>
    )
}

export default Modal;