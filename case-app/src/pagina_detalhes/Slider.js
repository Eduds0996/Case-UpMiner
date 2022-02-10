import React from 'react'
import {Carousel} from 'react-bootstrap'
import imagem1 from '../imagens/linha_do_tempo1.jpg'
import imagem2 from '../imagens/linha_do_tempo2.png'
import './slider.css'

const Slider = () =>{
  return (
    <div className="carousel">
  <Carousel>
  <Carousel.Item>
    <div className="image1">
      <div className="card1">
        <img
          className=""
          src={imagem1}
          alt="First slide"
        />
        <div className="legenda1">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
    <div className="image2">
      <div className="card2">
        <img    
          className=""
          src={imagem1}
          alt="First slide"
        />
        <div className="legenda1">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>    
  </Carousel.Item>
  <Carousel.Item>
    <div className="image1">
      <div className="card1">
        <img
          className=""
          src={imagem2}
          alt="First slide"
        />
        <div className="legenda1">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
    <div className="image2">
      <div className="card2">
        <img    
          className=""
          src={imagem2}
          alt="First slide"
        />
        <div className="legenda1">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>    
  </Carousel.Item>
  
</Carousel>
</div> 
  )
}

export default Slider;