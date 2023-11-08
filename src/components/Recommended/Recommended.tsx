import ProductCard from '../ProductCard/ProductCard';
import styles from './Recommended.module.scss';

const productItems: { name: string; price: number; img: string }[] = [
  {
    name: 'Название программного обеспечения',
    price: 19898,
    img: '',
  },
  {
    name: 'Название программного обеспечения',
    price: 19898,
    img: '',
  },
  {
    name: 'Название программного обеспечения',
    price: 19898,
    img: '',
  },
  {
    name: 'Adobe Photoshop 2023',
    price: 19898,
    img: 'http://allpcworld.com/wp-content/uploads/2017/03/Adobe-Photoshop-CC-2017-Portable-Free-Download.jpg',
  },
  {
    name: 'Название программного обеспечения',
    price: 19898,
    img: '',
  },
];

type Props = {};

const Recommended: React.FC = (props: Props) => {
  return (
    <section className={styles.recommended}>
      <h2 className={styles.recommended__title}>Рекомендуем к покупке</h2>
      <ul className={styles.recommended__list}>
        {productItems.map(i => (
          <li className={styles.recommended__item}>
            <ProductCard
              name={i.name}
              price={i.price}
              img={i.img}
              isLiked={false}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Recommended;
