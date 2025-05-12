import { useNavigate } from 'react-router-dom';
import { useLanguage } from "../../contexts/LanguageContext";
import Button from '../Button/Button';
import './Valuation.css';

function Valuation({ visibleSections = { valuation: true } })  {
    const { t, getRoute } = useLanguage();
    const navigate = useNavigate();

    return (
        <div className={`valuation-wrapper ${visibleSections.valuation ? 'visible' : ''}`}>
            <div className="valuation-container">
                
                    <h2 dangerouslySetInnerHTML={{ __html: t('tasaciontitulo') }} />
                    {/* <Button
                    translationKey="registrate"
                    routeName="sell"
                /> */}

                    <Button
                        translationKey="registrate"
                        routeName="sell"
                        backgroundColor="transparent"
                    />
                
            </div>
        </div>
    );
}

export default Valuation;