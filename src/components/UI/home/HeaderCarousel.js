import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
const HeaderCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
  return (
    <>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Home_Page_Banner_Generic_20.08_Comp.png?v=1661755438"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3  className='mb-5' style={{fontSize: "2.5rem"}}>Bring Your Next Plant Home</h3>
          <Button variant="success">Shop Plants</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Hari_Bhari_Diwali_Sale_2022-1833x665.jpg?v=1663871777&width=2200"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Home_Page_Banner_Generic_20.08_Comp.png?v=1661755438"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3  className='mb-5' style={{fontSize: "2.5rem"}}>Bring Your Next Plant Home</h3>
          <Button variant="success">Shop Plants</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <div style={{ color: "white", backgroundColor: "#FFE3E1", display: "flex", flexDirection: "row", justifyContent: "space-evenly", padding: "3rem 3rem"}}>
        <h3 style={{color:"black",}}>Our very new shades of green<br /> Check out our latest sales and offers.</h3>
        <div>
    <Button variant="success" size="sm" style={{padding: "7px 11px"}}>VIEW ALL OFFERS</Button>{' '}

        </div>
    </div>
    </>
  )
}

export default HeaderCarousel