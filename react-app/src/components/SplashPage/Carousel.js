import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

function SplashCarousel() {

  return (
    <Carousel
    autoPlay
    infiniteLoop
    showThumbs={false}
    showStatus={false}
    showArrows={false}
    showIndicators
    interval={5000}
    transitionTime={2000}
    styles={{...styles, height: "100%"}}
    className="splash-images"
    >
      <div>
        <img src="/static/images/splashpage/1.jpg" alt="woman on laptop"/>
      </div>
      <div>
        <img src="/static/images/splashpage/2.jpg" alt="man on laptop"/>
      </div>
      <div>
        <img src="/static/images/splashpage/3.jpg" alt="girls studying"/>
      </div>
      <div>
        <img src="/static/images/splashpage/4.jpg" alt="guys studying" />
      </div>
      <div>
        <img src="/static/images/splashpage/5.jpg" alt="woman and child studying" />
      </div>
      <div>
        <img src="/static/images/splashpage/6.jpg" alt="group of kids learning" />
      </div>
      <div>
        <img src="/static/images/splashpage/7.jpg" alt="adults learning" />
      </div>
      <div>
        <img src="/static/images/splashpage/8.jpg" alt="group of kids learning" />
      </div>
    </Carousel>
  )
}

export default SplashCarousel