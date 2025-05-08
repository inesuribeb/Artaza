import BuyForm from './components/BuyForm';
import Valuation from '../../components/Valuation/Valuation';
import './Buy.css'

function Buy () {
    return (
        <div className='buy-wrapper'>
            <BuyForm />
            <Valuation />
        </div>
    );
}

export default Buy;