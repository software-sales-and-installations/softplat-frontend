import { FC } from 'react';
import styles from './VendorPage.module.scss';
import VendorInfo from '../../components/VendorInfo/VendorInfo';
import { VendorInfoProps } from '../../components/VendorInfo/VendorInfoTypes';
import { CATEGORIZED_TEXT_VENDOR } from '../../utils/constants';
import SelectForm from '../../components/SelectForm/SelectForm';
import ProductCard from '../../components/ProductCard/ProductCard';

const vendorInfo: VendorInfoProps = {
  title: 'Adobe',
  description:
    'Компания Adobe — ведущий мировой разработчик революционных программных продуктов для любого вида данных, включая текстовую информацию, графические изображения, видео и web-контент. Adobe Systems является правообладателями формата PDF и TIFF. В сентябре 2022 года Adobe объявила о покупке сервиса Figma за 20 млн $. В феврале 2023 года Еврокомиссия озвучила намерение проверить эту сделку из-за повышенной опасности снижения конкуренции на рынке ПО для интерактивного дизайна. В марте 2023 года Adobe представила собственный ИИ-сервис для генерации изображений по описаниям на естественном языке. В сентябре 2023 года компания завершила процесс бета-тестирования продукта и открыла его широкой публике на коммерческой основе.',
  img: 'https://xakep.ru/wp-content/uploads/2015/01/Adobe-Logo.jpg',
};

const productItems: { name: string; price: number; img: string }[] = [
  {
    name: 'Adobe Photoshop 2023',
    price: 19898,
    img: 'http://allpcworld.com/wp-content/uploads/2017/03/Adobe-Photoshop-CC-2017-Portable-Free-Download.jpg',
  },
  {
    name: 'Adobe Photoshop 2023',
    price: 19898,
    img: 'http://allpcworld.com/wp-content/uploads/2017/03/Adobe-Photoshop-CC-2017-Portable-Free-Download.jpg',
  },
  {
    name: 'Adobe Photoshop 2023',
    price: 19898,
    img: 'http://allpcworld.com/wp-content/uploads/2017/03/Adobe-Photoshop-CC-2017-Portable-Free-Download.jpg',
  },
  {
    name: 'Adobe Photoshop 2023',
    price: 19898,
    img: 'http://allpcworld.com/wp-content/uploads/2017/03/Adobe-Photoshop-CC-2017-Portable-Free-Download.jpg',
  },
  {
    name: 'Adobe Photoshop 2023',
    price: 19898,
    img: 'http://allpcworld.com/wp-content/uploads/2017/03/Adobe-Photoshop-CC-2017-Portable-Free-Download.jpg',
  },
];

type Props = {};

const VendorPage: FC = (props: Props) => {
  return (
    <section className={styles.vendorPage}>
      <VendorInfo
        title={vendorInfo.title}
        description={vendorInfo.description}
        img={vendorInfo.img}
      />
      <ul className={styles.vendorPage__categories}>
        {CATEGORIZED_TEXT_VENDOR.map(btn => {
          return (
            <li className={styles.item} key={btn.id}>
              <button className={styles.vendorPage__categoriesBtn}>
                {btn.text}
              </button>
            </li>
          );
        })}
      </ul>
      <SelectForm />
      <div className={styles.vendorPage__products}>
        <ul className={styles.vendorPage__list}>
          {productItems.map(card => (
            <li className={styles.vendorPage__listItem} key={card.name}>
              <ProductCard
                name={card.name}
                price={card.price}
                img={card.img}
                isLiked={true}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default VendorPage;
