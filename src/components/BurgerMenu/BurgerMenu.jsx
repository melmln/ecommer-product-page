import './BurgerMenu.css'
import { useState } from 'react';

const BurgerMenu = () => {

  const [bmClass, setBMClass] = useState('bm unclicked')

  return (
    <>
        <div className="">
            {/* <ul>
                <li className="category">Collections</li>
                <li className="category">Men</li>
                <li className="category">Women</li>
                <li className="category">About</li>
                <li className="category">Contact</li>
            </ul> */}
           Menu
        </div>
    </>
  )
}

export default BurgerMenu;