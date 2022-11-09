import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function SplashCarousel() {

  return (
    <Carousel>
      <div>
        <img src="/static/images/splashpage/1.jpg" alt="woman on laptop"/>
      </div>
      <div>
        <img src="/static/images/splashpage/2.jpg" alt="man on laptop"/>
      </div>
      <div>
        <img src="/static/images/splashpage/3.jpg" alt="girls studying"/>
      </div>
    </Carousel>
  )
}

export default SplashCarousel