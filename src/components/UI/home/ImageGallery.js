import React from 'react'
import "./ImageGallery.css";

const images = [
    {
        img: "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Best_Sellers_2.png?v=1661763237",
        name: "best sellers",
        id: 1,
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Easy_To_Care_2_00213678-218b-41b6-b7a7-dc8a3e2a5da2.png?v=1661763579",
        name: "easy to care",
        id: 2,


    },
    {
        img: "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/XL_Plants_2.png?v=1661763445",
        name: "XL plants",
        id: 3,

    },
    {
        img: "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Ceramic_Pots_2_dc27090b-0488-4167-a53b-02c523ac0e1b.png?v=1661763610",
        name: "ceramic pots",
        id: 4,

    },
    {
        img: "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Vegetable_Seeds_2.png?v=1661763516",
        name: "vegetable seeds",
        id: 5,

    },
    {
        img: "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Fertilisers_2.png?v=1661763381",
        name: "fertilisers",
        id: 6,

    },
  
]
const ImageGallery = () => {
  return (
    <div className="main__container">
    <div className="image-container">
        {
            images.map((image) => (
                <div className="image-row" key={image.id}>
                   
                    <img src={image.img} alt={image.name} />
                    <h4>{image.name}</h4>
                </div>
            ))
        }
    </div>
    </div>
  )
}

export default ImageGallery