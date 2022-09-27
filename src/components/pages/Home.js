import React from 'react'
import HeaderCarousel from '../UI/home/HeaderCarousel';
import Categories from "../UI/home/Categories";
import ImageGallery from '../UI/home/ImageGallery';
import BestSeller from '../UI/home/BestSeller';
import NewArrival from '../UI/home/NewArrival';
function Home() {
  return (
    <div>
      <HeaderCarousel />
      <ImageGallery />
      <Categories />
      <NewArrival />
      <BestSeller />

    </div>
  )
}

export default Home