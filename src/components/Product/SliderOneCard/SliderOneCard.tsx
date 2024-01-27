import './SliderOneCard.scss';
import 'swiper/scss';
import 'swiper/scss/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import CONST_IMG from '../../../images/underfined-image.jpg';
import { API_BASE_URL } from '../../../utils/constants.ts';

interface ISliderProps {
  id: string | undefined;
}

export const SliderOneCard = ({id}: ISliderProps) => {

  return (
    <div className="swiperOneCard__wrapper">
      <Swiper
        slidesPerView={'auto'}
        modules={[Pagination, Navigation]}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
        className="swiperOneCard"
        navigation={{
          nextEl: ".swiperOneCard-button-next",
          prevEl: ".swiperOneCard-button-prev",
          disabledClass: "swiperOneCard-button-disabled"
        }}
      >
          <SwiperSlide className="swiperOneCard-slide">
            <div className='swiperOneCard-slide__content'>
              <div className='swiperOneCard-slide__img-container'>
                <img
                  className='swiperOneCard-slide__img'
                  src={id? `${API_BASE_URL}/image/${id}`: CONST_IMG}
                  alt='Картинка слайдера'
                />
              </div>
              <div className='swiperOneCard-button-prev' />
              <div className='swiperOneCard-button-next' />
            </div>
          </SwiperSlide>
      </Swiper>
    </div>
  );
};

