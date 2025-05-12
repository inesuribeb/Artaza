import './MapHome.css';

function MapHome({ property, language, t }) {
    return (
        <div className='map-home-wrapper'>
            <div className='title-info'>
                <h1>
                    <span className="first-line">{t('aboutItsLocationFirstLine')}</span>
                    <br />
                    <span className="second-line">{t('aboutItsLocationSecondLine')}</span>
                </h1>
            </div>

            <div className='map'>

            </div>
        </div>
    )
}

export default MapHome;