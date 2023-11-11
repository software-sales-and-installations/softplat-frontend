import styles from './Slider.module.scss';

import 'swiper/scss';
import 'swiper/scss/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

type Slider = {
  text: string;
  url: string;
  img: string;
}[];

const slides: Slider = [
  {
    text: 'Slide 1',
    url: 'https://github.com/',
    img: 'https://randomwordgenerator.com/img/picture-generator/sea-2101488_640.jpg',
  },
  {
    text: 'Slide 2',
    url: 'https://github.com/',
    img: '',
  },
  {
    text: 'Slide 3',
    url: 'https://github.com/',
    img: '',
  },
];

type Props = {};

const Slider = (props: Props) => {
  return (
    <Swiper
      spaceBetween={40}
      slidesPerView={'auto'}
      mousewheel={true}
      modules={[Navigation]}
      loop={true}
      navigation
      className={styles.swiper}
    >
      {slides.map(i => (
        <SwiperSlide className={styles['swiper-slide']}>
          <a
            className={styles['swiper-slide__content']}
            href={i.url}
            target="_blank"
          >
            <img
              className={styles['swiper-slide__img']}
              src={i.img}
              alt="Картинка слайдера"
            />
            <div className={styles['swiper-slide__text-container']}>
              <p className={styles['swiper-slide__text']}>{i.text}</p>
            </div>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
