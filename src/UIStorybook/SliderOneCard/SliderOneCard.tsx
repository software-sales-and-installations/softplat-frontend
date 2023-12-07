import { FC } from 'react';
import './SliderOneCard.scss';
import 'swiper/scss';
import 'swiper/scss/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

export const SliderOneCard: FC<SliderProps> = ({ slides }) => {
  return (
    <div className="swiperOneCard__wrapper">
      <Swiper
        slidesPerView={'auto'}
        modules={[Pagination, Navigation]}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
        navigation={true}
        className="swiperOneCard"
      >
        {slides?.map(i => (
          <SwiperSlide className="swiperOneCard-slide" key={i.text}>
            <div className="swiperOneCard-slide__content">
              <div className="swiperOneCard-slide__img-container">
                <img
                  className="swiperOneCard-slide__img"
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

