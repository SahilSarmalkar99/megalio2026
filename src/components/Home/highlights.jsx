import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import './carousel.css';

// Import im*
// ges (ensure paths are correct)
import img1 from '../../assets/carousel/image1.webp';
import img2 from '../../assets/carousel/image2.webp';
import img3 from '../../assets/carousel/image3.webp';
import img4 from '../../assets/carousel/image4.webp';
import img5 from '../../assets/carousel/image5.webp';
import img6 from '../../assets/carousel/image6.webp';

const images = [img1, img2, img3, img4, img5, img6];

const ImageCarousel = () => {
  return (
    <section className="carousel-main-wrapper">
    <div className="carousel-container">
      <h2 className="pixel-title">GLIMPSES OF MEGALEIO 2025</h2>
      
      <Swiper
        effect={'coverflow'}
  grabCursor={true}
  centeredSlides={true}
  slidesPerView={1.5} // This ensures 1 full center slide and parts of 2 others
  breakpoints={{
    768: {
      slidesPerView: 3, // On desktop, show exactly 3
    },
  }}
  loop={true}
  speed={800} // This makes the transition "smooth" and slower
  autoplay={{
            delay: 2000,

            disableOnInteraction: false,
          }}
  coverflowEffect={{
    rotate: 0,
    stretch: 0,
    depth: 200,      // Pushes side slides back
    modifier: 1,
    slideShadows: false,
  }}
  navigation={{
    nextEl: '.swiper-button-next-custom',
    prevEl: '.swiper-button-prev-custom',
  }}
  pagination={{ 
    el: '.swiper-pagination-custom',
    clickable: true 
  }}
  modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
  className="mySwiper"
>
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Event slide ${index + 1}`} />
          </SwiperSlide>
        ))}

        {/* FIX: The controls MUST be inside the <Swiper> tag 
           to be initialized correctly by the modules.
        */}
        <div className="controls-wrapper">
          <div className="controls-container">
            <div className="swiper-button-prev-custom">←</div>
            <div className="swiper-pagination-custom"></div>
            <div className="swiper-button-next-custom">→</div>
          </div>
        </div>
      </Swiper>
    </div>
    </section>
  );
};

export default ImageCarousel; 