import './Counter.css'
import minus from '../../assets/images/icon-minus.svg'
import plus from '../../assets/images/icon-plus.svg'
import { useState } from 'react'

const Counter = () => {

    // Declaro un estado inicial de 0 y un setCount que actualice el estado al número de items agregados
    const [count, setCount] = useState(0)
    const stock = 5

    // Si el número de productos es menor que el stock, puedo agregar un item. 
    const sum = () => count < stock ? setCount(count + 1) : 'We are out of stock'
    // Si el número de productos es menor a cero, puedo restar uno.
    const substract = () => count > 0 ? setCount(count - 1) : 'Add a item'

  return (
    <div className="counter-container">
        <div className="counter">
            <button className="counter-add-btn">
                <img src={minus} alt="counter-remove-btn" onClick={substract} />
            </button>
            <div className="counter-number">{count}</div>
            <button className="counter-add-btn" onClick={sum}>
                <img src={plus} alt="counter-remove-btn" />
            </button>
        </div>
    </div>
  )
}

export default Counter