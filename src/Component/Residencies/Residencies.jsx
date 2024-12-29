import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import './Residencies.css'
import data from "../../Utils/cardData.json"; 
import "pure-react-carousel/dist/react-carousel.es.css";


function Residencies() {
 
  return (
    <div>
      <h4 style={{marginLeft:"200px",color:"darkorange",fontSize:"18px"}}>Best Choices</h4>
      <h2 style={{marginLeft:"200px",fontSize:"25px",lineHeight:"0.5"}}>Popular Residencies</h2>
      <CarouselProvider
      naturalSlideWidth={50}
      naturalSlideHeight={75}
      totalSlides={data.length}
      visibleSlides={3} // Number of cards visible at once
      step={1} // How many slides to move per click
    >
      <div >
        <Slider className='slides'>
          {data.map((card, index) => (
            <Slide key={card.name}>
              <div className='slide'>
                <img className='sliderImage' src={card.image} alt={card.name}/>
                <h4 style={{color:"darkorange"}}>{'₹'}{card.price}</h4>  
                <h3>{card.name}</h3>
                <h5 style={{width:"220px"}}>{card.detail}</h5>
              </div>
            </Slide>
          ))}
        </Slider>
        <div className='directionButton'> 
          <ButtonBack>&lt;</ButtonBack>
          <ButtonNext>&gt;</ButtonNext>
        </div>
      </div>
    </CarouselProvider>
    </div>
  )
}

export default Residencies
