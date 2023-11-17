import ProductCard from '../ProductCard/ProductCard';
import styles from './PersonalFavorites.module.scss';

const productItems: { name: string; price: number; img: string }[] = [
  {
    name: 'Название программного обеспечения',
    price: 19898,
    img: 'http://allpcworld.com/wp-content/uploads/2017/03/Adobe-Photoshop-CC-2017-Portable-Free-Download.jpg',
  },
  {
    name: 'Название программного обеспечения',
    price: 19898,
    img: 'http://allpcworld.com/wp-content/uploads/2017/03/Adobe-Photoshop-CC-2017-Portable-Free-Download.jpg',
  },
  {
    name: 'Название программного обеспечения',
    price: 19898,
    img: 'http://allpcworld.com/wp-content/uploads/2017/03/Adobe-Photoshop-CC-2017-Portable-Free-Download.jpg',
  },
];

type Props = {};``

const PersonalFavorites: React.FC = (props: Props) => {
  return (
    <>
      <section className={styles.personalFavorites}>
        <h2 className={styles.personalFavorites__title}>Избранное</h2>
        <ul className={styles.personalFavorites__list}>
          {productItems.map(i => (
            <li className={styles.personalFavorites__item}>
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
    </>
  );
};

export default PersonalFavorites;
