import { useState } from 'react';
import classNames from 'classnames';
import styles from './SellerCabinetContent.module.scss';
import { CardTable } from '../CardTable/CardTable';
import { usePublicProductListQuery } from '../../utils/api/publicProductApi';
import Preloader from '../Preloader/Preloader';
// import { useAppSelector } from '../../services/redux/store';

const SellerProduct: React.FC = () => {
  const [activeBtn, setActiveBtn] = useState('existingCards');
  // const sellerInfo = useAppSelector(state => state.user.user)
  // console.log(sellerInfo)

  const { data, error, isLoading } = usePublicProductListQuery({
    minId: 0,
    pageSize: 10,
    sort: 'NEWEST',
  });

  // const currentSellerCards = data.products.filter(card => card.seller.email === sellerInfo.email)
  // console.log(currentSellerCards)

  return (
    <section className={styles.sellerProduct}>
      <h2 className={styles.sellerProduct__title}>Мои товары</h2>
      <p className={styles.sellerProduct__subtitle}>
        Здесь вы можете посмотреть список ваших товаров, добавить новый товар и
        отредактировать карточку существующего товара
      </p>
      <nav className={styles.sellerProduct__titles}>
        <button
          type="button"
          onClick={() => setActiveBtn('existingCards')}
          className={classNames(
            styles.sellerProduct__data,
            activeBtn === 'existingCards'
              ? styles.sellerProduct__data_aktive
              : '',
          )}
        >
          Созданные карточки
        </button>
        <button
          onClick={() => setActiveBtn('addCard')}
          type="button"
          className={classNames(
            styles.sellerProduct__data,
            activeBtn === 'addCard' ? styles.sellerProduct__data_aktive : '',
          )}
        >
          Добавить карточку
        </button>
        <button
          onClick={() => setActiveBtn('moderationCard')}
          type="button"
          className={classNames(
            styles.sellerProduct__data,
            activeBtn === 'moderationCard'
              ? styles.sellerProduct__data_aktive
              : '',
          )}
        >
          На модерации
        </button>
      </nav>
      {isLoading ? (
        <Preloader />
      ) : error ? (
        <p>Произошла ошибка</p>
      ) : (
        <CardTable products={data.products} />
      )}

      {/* {activeBtn==='existingCards'? <CardTable card={SellerExistingCard.}/> : null} */}
    </section>
  );
};

export default SellerProduct;
