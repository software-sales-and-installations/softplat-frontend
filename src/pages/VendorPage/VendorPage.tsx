import { FC } from 'react';
import styles from './VendorPage.module.scss';
import VendorInfo from '../../components/VendorInfo/VendorInfo';
import { VendorInfoProps } from '../../components/VendorInfo/VendorInfoTypes';
import { CATEGORIZED_TEXT_VENDOR, PRODUCT_ITEMS } from '../../utils/constants';
import SelectForm from '../../components/SelectForm/SelectForm';
import CardsGrid from '../../components/CardsGrid/CardsGrid';

const vendorInfo: VendorInfoProps = {
  title: 'Adobe',
  description:
    'Компания Adobe — ведущий мировой разработчик революционных программных продуктов для любого вида данных, включая текстовую информацию, графические изображения, видео и web-контент. Adobe Systems является правообладателями формата PDF и TIFF. В сентябре 2022 года Adobe объявила о покупке сервиса Figma за 20 млн $. В феврале 2023 года Еврокомиссия озвучила намерение проверить эту сделку из-за повышенной опасности снижения конкуренции на рынке ПО для интерактивного дизайна. В марте 2023 года Adobe представила собственный ИИ-сервис для генерации изображений по описаниям на естественном языке. В сентябре 2023 года компания завершила процесс бета-тестирования продукта и открыла его широкой публике на коммерческой основе.',
  img: 'https://xakep.ru/wp-content/uploads/2015/01/Adobe-Logo.jpg',
};

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
      <div className={styles.vendorPage__selectForm}>
        <SelectForm />
      </div>
      <div className={styles.vendorPage__products}>
        <CardsGrid cards={PRODUCT_ITEMS} />
      </div>
    </section>
  );
};

export default VendorPage;
