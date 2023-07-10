import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "../styles/Services.css"
const Services = () => {
  return (
    <div  className='services'>
      
        <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} >
          <div>
            <img src="/images/support.jpg" alt="" />
            <p>IT SUPPORT</p>
          </div>
          <div>
            <img src="/images/image2.jpg" alt="" />
            <p>SOCIAL MEDIA</p>
          </div>
          <div>
            <img src="/images/network.jpg" alt="" />
            <p>Network</p>
          </div>
          <div>
            <img src="/images/corporate.png" alt="" />
            <p>Corporate</p>
          </div>

        </Carousel>
    </div>
  )
}

export default Services