import './Nav.css'
// components
import BurgerMenu from '../BurgerMenu/BurgerMenu';
// assets
import logo from '../../assets/images/logo.svg'
import cart from '../../assets/images/icon-cart.svg'
import avatar from '../../assets/images/image-avatar.png'
import bm from '../../assets/images/icon-menu.svg'
import { useState } from 'react';
import Cart from '../Cart/Cart';

const Nav = () => {

    const [active, setActive] = useState(false);
    
    const activeCart = () => {
        setActive(active => !active) // si active es false, lo cambia a true. si es true lo cambia a false.
        console.log(active)
    }
      return (
    <>
                <nav>
                    <div className="nav-left">
                        <div className='bm-container'>
                            <img src={bm} alt="burger menu" className='bm'/>
                        </div>
                        <div className="logo-container">
                            <img src={logo} alt="sneakers" className='logo' />
                        </div>
                    </div>
                    
                    <div className="nav-right">
                            <div 
                            className='cart-container'
                            onClick={activeCart}
                            >
                            <div className="counter-budget">0</div>
                                <img src={cart} alt="cart" className='cart'/>
                            </div>
                            <div className="user-container">
                                <img src={avatar} alt="avatar" className="user" />
                            </div>
                    </div>
                </nav>

                         {/* active cart */}
    
                {active === true ? (
                    <div className= 'display-container'>
                        <div className="display-cart-container">
                            <div className="cart-title">
                                <h4>Cart</h4>
                                <div className="line"></div>
                            </div>
                            
                            <div className="cart-content">
{/*                                 <p className="cart-empty">Your cart is empty.</p>
 */}                                <Cart/>
                            </div>
                        </div>
                    </div>
                ) : ''}
    </>
  )
}

export default Nav;