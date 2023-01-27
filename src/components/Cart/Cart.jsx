import './Cart.css';
import db from '../../../db.json';
import trash from '../../assets/images/icon-delete.svg';

const Cart = () => {


  return (
    <>
      {
        db.map(item => {
          return(
            
              <div className='item-added-container' key={item.id}>
                  <div className="item-added-content">
                    <img className='item-added-img' src={item.img} alt="item-added-img" />
                    
                    <div className='item-added-info'>
                        <h3 className='item-added-title'>{item.title}</h3>
                        <div className="item-added-price">${item.price} x {'quantity'} <b className='total-price'>{'total'}</b></div>
                    </div>
                    <div className='trash-icon-container'>
                       <img className='trash-icon' src={trash} alt="delete" />
                    </div>
                  </div>
                  <button className='checkout-btn'>Checkout</button>
              </div>
            
          )
        })
      }
    </>
    
  )
  
  
}

export default Cart;