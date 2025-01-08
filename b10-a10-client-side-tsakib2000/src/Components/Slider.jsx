import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import slide1 from '../assets/216257.jpg'
import slide2 from '../assets/519133.jpg'
import slide3 from '../assets/652700.png'
import slide4 from '../assets/816719.jpg'
const Slider = () => {

    return (

      <Carousel autoPlay infiniteLoop showThumbs={false}>
      <div className="h-96 lg:h-[450px] w-full">
          <img className="object-center h-full " src={slide1}/>
         
      </div>
      <div className="h-96 lg:h-[450px] w-full">
          <img className="object-center h-full " src={slide2} />
         
      </div>
      <div className="h-96 lg:h-[450px] w-full">
          <img className="object-center h-full " src={slide3} />
          
      </div>
      <div className="h-96 lg:h-[450px] w-full">
          <img className="object-center h-full " src={slide4} />
          
      </div>
  </Carousel>
    );
};

export default Slider;