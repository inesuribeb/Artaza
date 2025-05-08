import { useNavigate } from 'react-router-dom';
import { useLanguage } from "../../contexts/LanguageContext";
import Button from '../Button/Button';
import './Valuation2.css';

function Valuation2({ visibleSections }) {
    const { t, getRoute } = useLanguage();
    const navigate = useNavigate();

    return (
        <div className={`valuation-wrapper ${visibleSections.valuation ? 'visible' : ''}`}>
            <div className="valuation-container">
                <div className='valuation-pictures'>
                    <img src="/images/patrimoine.avif" alt=""/>
                </div>
                <div className='little-card'>
                    <img src="/images/ISOTIPO.png" alt=""/>
                    <h2 dangerouslySetInnerHTML={{ __html: t('tasaciontitulo') }} />
                    <Button
                        translationKey="registrate"
                        routeName="sell"
                    />
                </div>
            </div>
        </div>
    );
}

export default Valuation2;