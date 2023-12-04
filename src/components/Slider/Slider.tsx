import { FC } from 'react';
import './Slider.scss';
import 'swiper/scss';
import 'swiper/scss/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Slider: FC<SliderProps> = ({ slides }) => {
  return (
    <div className="swiper__wrapper">
      <Swiper
        spaceBetween={10}
        slidesPerView={'auto'}
        modules={[Pagination, Autoplay, Navigation]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
        navigation={true}
        className="swiper"
      >
        {slides?.map(i => (
          <SwiperSlide className="swiper-slide" key={i.text}>
            <div className="swiper-slide__content">
              <div className="swiper-slide__text-container">
                <p className="swiper-slide__text">{i.text}</p>
                <Link to={i.link} className="swiper-slide__btn">
                  Подробнее
                </Link>
              </div>
              <div className="swiper-slide__img-container">
                <img
                  className="swiper-slide__img"
                  src={i.img}
                  alt="Картинка слайдера"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
