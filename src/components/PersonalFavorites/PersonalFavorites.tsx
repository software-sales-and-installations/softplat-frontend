import {useEffect} from 'react'
import ProductCard from '../ProductCard/ProductCard';
import styles from './PersonalFavorites.module.scss';
import { useAppDispatch, useAppSelector } from '../../services/redux/store';
import { fetchAllCards } from '../../services/redux/slices/cards/cards';
import { useLoadFavorites } from '../../services/favoritesService/favoritesService';

const PersonalFavorites: React.FC = () => {
  const dispatch = useAppDispatch();
  const favoriteIds = useAppSelector(store => store?.favorite?.favorites);
  const cards = useAppSelector(store => store?.cards?.cards?.products);

  useLoadFavorites()
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchAllCards());
    };
    
    fetchData();
  }, [dispatch, favoriteIds]);

  const favoriteCards = cards.filter(card => favoriteIds.includes(card.id));

  // console.log(favoriteIds);
  // console.log(cards);
  // console.log(favoriteCards);

  return (
      <section className={styles.personalFavorites}>
        <ul className={styles.personalFavorites__list}>
          {favoriteCards.map(card => (
            <li key={card.id} className={styles.personalFavorites__item}>
              <ProductCard card={card} />
            </li>
          ))}
        </ul> 
      </section>
  );
};

export default PersonalFavorites;
