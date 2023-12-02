import { FC } from 'react';
import './Slider.scss';
import 'swiper/scss';
import 'swiper/scss/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

type Slider = {
  text: string;
  img: string;
}[];

const slides: Slider = [
  {
    text: 'Быстрый и удобный процесс покупки — получите доступ к программному обеспечению всего в несколько кликов',
    img: 'https://randomwordgenerator.com/img/picture-generator/sea-2101488_640.jpg',
  },
  {
    text: 'Удобные способы оплаты онлайн в любое время',
    img: '',
  },
  {
    text: 'Slide 3',
    img: '',
  },
];

// type Props = {};

const Slider: FC = () => {
  return (
    <div className='swiper__wrapper'>

    <Swiper
      spaceBetween={40}
      slidesPerView={'auto'}
      modules={[Pagination, Autoplay, Navigation]}
      // autoplay={{ delay: 5000, disableOnInteraction: false }}
      navigation={true}
      loop={true}
      grabCursor={true}
      pagination={{ clickable: true }}
      className="swiper"
    >
      {slides?.map(i => (
        <SwiperSlide className="swiper-slide" key={i.text}>
          <div className="swiper-slide__content">
            <div className="swiper-slide__text-container">
              <p className="swiper-slide__text">{i.text}</p>
              <Link to='' className='swiper-slide__btn'>Подробнее</Link>
            </div>
            <div className='swiper-slide__img-container'>
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
