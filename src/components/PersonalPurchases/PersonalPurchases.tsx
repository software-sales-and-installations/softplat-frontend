import styles from './PersonalPurchases.module.scss';
import CardPurchases from '../CardPurchases/CardPurchases';

const productItems: {
  img: string;
  name: string;
  brand: string;
  describe: string;
  data: string;
}[] = [
  {
    img: 'http://allpcworld.com/wp-content/uploads/2017/03/Adobe-Photoshop-CC-2017-Portable-Free-Download.jpg',
    name: 'Название программного обеспечения',
    brand: 'Бренд',
    describe: 'Описание',
    data: '01/10/2023',
  },
  {
    img: 'http://allpcworld.com/wp-content/uploads/2017/03/Adobe-Photoshop-CC-2017-Portable-Free-Download.jpg',
    name: 'Название программного обеспечения',
    brand: 'Бренд',
    describe: 'Описание',
    data: '01/10/2023',
  },
  {
    img: 'http://allpcworld.com/wp-content/uploads/2017/03/Adobe-Photoshop-CC-2017-Portable-Free-Download.jpg',
    name: 'Название программного обеспечения',
    brand: 'Бренд',
    describe: 'Описание',
    data: '01/10/2023',
  },
];

const PersonalPurchases: React.FC = () => {
  return (
    <section className={styles.personalPurchases}>
      <h2 className={styles.personalPurchases__title}>Мои покупки</h2>
      <ul className={styles.personalPurchases__list}>
        {productItems.map(i => (
          <li className={styles.personalPurchases__item}>
            <CardPurchases
              img={i.img}
              name={i.name}
              brand={i.brand}
              describe={i.describe}
              data={i.data}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PersonalPurchases;
