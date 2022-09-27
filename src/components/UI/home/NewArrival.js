
import React from 'react'
import "./BestSeller.css"
const bestSellerDetails = [
    {
        id: 1,
        img: "https://cdn.shopify.com/s/files/1/0579/7924/0580/products/philodendronbrokenheart_45_1.png?v=1661318401&width=550",
        text: "broken heart plant",
        oldPrice: "499",
        newPrice: "299",
        discount: "-41%",
    },
    {
        id: 2,
        img: "https://cdn.shopify.com/s/files/1/0579/7924/0580/products/crassulagreenmini_45.png?v=1661335319&width=375",
        text: "jade plant mini",
        oldPrice: "499",
        newPrice: "239",
        discount: "SALE",
    },
    {
        id: 3,
        img: "https://cdn.shopify.com/s/files/1/0579/7924/0580/products/fittoniagreennew_45.png?v=1662822948&width=375",
        text: "fittonia green plant",
        oldPrice: "499",
        newPrice: "289",
        discount: "-41%",
    },
    {
        id: 4,
        img: "https://cdn.shopify.com/s/files/1/0579/7924/0580/products/luckybamboo3layer_45_jpg.png?v=1661320811&width=375",
        text: "lucky bamboo plant- 3 layer",
        oldPrice: "499",
        newPrice: "399",
        discount: "-21%",
    },
]
const NewArrival = () => {
  return (
    <div className="bestseller-main-container">
        <div className="icon__heading_container">
            <h2><span><img src="https://cdn.shopify.com/s/files/1/0579/7924/0580/files/New-Plants_2x_d5110dfd-b698-4342-ba8d-9aa908711a32_small.png?v=1656414976" alt="plant icon"  className='icon--img'/></span>New Arrivals</h2>
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


export default NewArrival