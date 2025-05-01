import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import Button from '../Button/Button';
import './Valuation.css'

function Valuation(visibleSections) {
    const { t, getRoute } = useLanguage();
    const navigate = useNavigate();

    return (
        <div className="footer-center">
            <h2>{t('tasaciontitulo')}</h2>
            <p>{t('tasaciontexto')}</p>
            <Button
                translationKey="registrate"
                routeName="sell"
            />
        </div>
    )
}

export default Valuation;