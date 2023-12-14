import ProductCard from '../../ProductCard/ProductCard.tsx';
import styles from './Similar.module.scss';

const cardsDemo = [
  {
    name: 'DemoCard1',
    price: 1000,
    installationPrice: 1200,
    id: 1,
   },
  {
    name: 'DemoCard2',
    price: 1000,
    installationPrice: 1200,
    id: 2,
  },
  {
    name: 'DemoCard3',
    price: 1000,
    installationPrice: 1200,
    id: 3,
  },
  {
    name: 'DemoCard4',
    price: 1000,
    installationPrice: 1200,
    id: 4,
  },
  {
    name: 'DemoCard5',
    price: 1000,
    installationPrice: 1200,
    id: 5,
  }
]

function Similar() {
  return (
    <div className={styles.similar}>
      {cardsDemo.map((card) => (
      <ProductCard key={card.id} card={card}></ProductCard>))}
    </div>
  );
}

export default Similar;
