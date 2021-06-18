import React from 'react';
import exam from '../../media/audifos.PNG'

const Card = () => {
    return (
        
     
        <div className='card'>
            <div className='imgBx'>
    
                <img src={exam} />
    
            </div>

            <div className="contentBx">
                <h3>Kraken Kitty Gaming</h3>
                
                <h2 className="price">$87.000 <small>00</small></h2>
                
                <a href="#" className="buy">Comprar Ahora</a>
    
            </div>
        
        
        </div>
       
    );
};

export default Card;