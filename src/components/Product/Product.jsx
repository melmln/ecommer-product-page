import './Product.css'

// assets
import imgProduct from '../../assets/images/image-product-1.jpg'
import previous from '../../assets/images/icon-previous.svg'
import next from '../../assets/images/icon-next.svg'
import cart from '../../assets/images/icon-cart.svg'

import Counter from '../Counter/Counter'

const Product = () => {
    return (
        <>
            <div className="product-container">
                <div className="img-product-container">
                    <img src={imgProduct} alt="product" />

                            {/* Buttons */}

                    <div className="product-btn-container">
                        <div className="previous-btn">
                            <img src={previous} alt="previous" className='previous'/>
                        </div>
                        <div className="next-btn">
                            <img src={next} alt="next" className='next'/>
                        </div>
                    </div>
                </div>
                        {/* Information */}

                <div className="product-info">

                    <h4 className="brand">Sneaker Company</h4>
                    <h2 className="product-title">Fall Limited Edition Sneakers</h2>
                    <div className="description-container">
                        <p className="description">
                            These low-profile sneakers are your perfect casual wear companion. 
                            Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
                        </p>
                    </div>   

                    <div className="price-container">
                        <div className="price-left">
                            <div className="new-price">$125.00</div>
                            <div className="desc-container">
                                <div className="desc">50%</div>
                            </div>
                        </div>
                        <div className="old-price">$250.00</div>
                    </div>
                    
                    <Counter/>
                    
                    <div className="btn-container">
                        <button className="add-btn"> <img src={cart} alt="cart-icon" /> Add to cart</button>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Product; 