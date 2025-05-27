import { useLanguage } from '../../contexts/LanguageContext';
import { TarifaHomes } from '../../utils/TarifaHomes';
import SouthCard from './components/SouthCard';
import './South.css'

function South() {
    const { t, language, getRoute } = useLanguage();

    return (
        <div className='south-homes-wrapper'>
            {/* <h1>South</h1> */}
            <div className='homes-grid'>
                {TarifaHomes.map((home, index) => (
                    <SouthCard
                        key={home.id}
                        home={home}
                        language={language}
                        t={t}
                        getRoute={getRoute}
                        isEven={index % 2 === 0}
                    />
                ))}
            </div>
        </div>
    )
}

export default South;