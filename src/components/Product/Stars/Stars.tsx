import styles from './Stars.module.scss'

interface IStarsProps {
  register: any;
}

const Stars = ({register}: IStarsProps) => {
  return (
    <div className={styles.stars}>
      <div className={styles.stars__widget}>
        <input
          type='radio'
          name="rate"
          id="rate-5"
          value='5.0'
          {...register('star')}
        />
        <label htmlFor="rate-5" className='fa fa-star'></label>
        <input
          type='radio'
          name="rate"
          id="rate-4"
          className={styles.star}
          value='4.0'
          {...register('star')}
        />
        <label htmlFor="rate-4" className="fa fa-star"></label>
        <input
          type='radio'
          name="rate"
          id="rate-3"
          className={styles.star}
          value='3.0'
          {...register('star')}
        />
        <label htmlFor="rate-3" className="fa fa-star"></label>
        <input
          type='radio'
          name="rate"
          id="rate-2"
          className={styles.star}
          value='2.0'
          {...register('star')}
        />
        <label htmlFor="rate-2" className="fa fa-star"></label>
        <input
          type='radio'
          name="rate"
          id="rate-1"
          className={styles.star}
          value='1.0'
          {...register('star')}
        />
        <label htmlFor="rate-1" className="fa fa-star"></label>
      </div>
    </div>
  );
};

export default Stars;
