import React from 'react'
import "./BestSeller.css"
const bestSellerDetails = [
    {
        id: 1,
        img: "https://cdn.shopify.com/s/files/1/0579/7924/0580/products/aloeblizzard_top_1.png?v=1661328736&width=375",
        text: "aloe blizzard plant",
        oldPrice: "499",
        newPrice: "399",
        discount: "-21%",
    },
    {
        id: 2,
        img: "https://cdn.shopify.com/s/files/1/0579/7924/0580/products/aloejuvenna_45_1.png?v=1661329460&width=375",
        text: "aloe juvenna plant",
        oldPrice: "499",
        newPrice: "299",
        discount: "-61%",
    },
    {
        id: 3,
        img: "https://cdn.shopify.com/s/files/1/0579/7924/0580/products/aloeveragreenmini_top_1.png?v=1661323067&width=375",
        text: "aloe vera green mini plant",
        oldPrice: "499",
        newPrice: "389",
        discount: "-21%",
    },
    {
        id: 4,
        img: "https://cdn.shopify.com/s/files/1/0579/7924/0580/products/aloeveramini_45_1.png?v=1661323945&width=375",
        text: "aloe vera mini plant",
        oldPrice: "499",
        newPrice: "349",
        discount: "-31%",
    },
]
const BestSeller = () => {
  return (
    <div className="bestseller-main-container">
        <div className="icon__heading_container">
            <h2><span><img src="https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Bestseller-1_2x_9a883cf1-58ba-4c74-badf-f02924575b68_small.png?v=1656416175" alt="plant icon"  className='icon--img'/></span>Bestsellers</h2>
        </div>
        <div className="image_text_container">
            {
                bestSellerDetails.map((item) => (
                    <div className="bestseller_details">
                        <div className="image_div">
                            <div className='img-hover-zoom'>
                            <img src={item.img} alt={item.text} />

                            </div>
                            <div className="discount">{item.discount}</div>
                            <h3>{item.text}</h3>
                        </div>
                        <p>
                            <sub style={
                                {textDecoration: "line-through", color: "#576F72", letterSpacing: "0.1rem", fontWeight: "300"}
                                }>&#x20b9;{item.oldPrice}</sub>
                            <span  style={
                                {color: "#36AE7C", letterSpacing: "0.1rem", fontWeight: "700", paddingLeft: "7px"}
                            }
                            >&#x20b9;{item.newPrice}</span>
                        </p>
                        <div>
                            <button className='button'>add to cart</button>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default BestSeller