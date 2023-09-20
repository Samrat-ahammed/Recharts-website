import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const {name ,price , features} = option;
    return (
        <div  className='bg-slate-700 text-white rounded-md p-6 m-6 flex flex-col'>
            <h2>
                <span className='text-7xl font-bold'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='text-3xl text-center'>{name}</h4>

           <div className='flex-grow'>
           {
                features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
            }
           </div>
                        <button className='mt-4 w-full bg-gray-500 rounded-md hover:bg-red-300 py-2'>Buy Now</button>

            
        </div>
    );
};

PriceOption.propTypes = {
 option : PropTypes.object
}



export default PriceOption;