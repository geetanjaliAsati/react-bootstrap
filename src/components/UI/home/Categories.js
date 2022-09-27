import React from 'react';
import "./categories.css"
const categories = [
    {
        id:1,
        name:"plants",
        img: "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Plants_R.png?v=1661741653",
    },
    {
        id:2,
        name:"seeds",
        img: "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Seeds_R.png?v=1661741675",
    },
    {
        id:3,
        name:"planters",
        img: "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Planters_R.png?v=1661741699",
    },
    {
        id:4,
        name:"plant care",
        img: "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Plant_Care_R.png?v=1661741723",
    },
]
const Categories = () => {
  return (
    <div className="home-categories-container">
        <h2>What are you looking for?</h2>
        <div className="categories-row">
            {
                categories.map((category) => (
                    <div className='category-card' key={category.id}>
                        <div className='img-hover-zoom'>

                       <img src={category.img} alt={category.name} />
                        </div>
                       <h4>{category.name}</h4>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Categories