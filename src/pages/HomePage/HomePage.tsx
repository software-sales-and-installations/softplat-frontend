import { FC } from 'react';
import Catalogue from '../../components/Catalogue/Catalogue';
import Slider from '../../components/Slider/Slider';
import Recommended from '../../components/Recommended/Recommended';
import { Categories } from '../../components/Categories/Categories';
import { slides } from '../../utils/constants';

export const HomePage: FC = () => {
    return (
        <>
        <Categories />
        <Slider slides={slides}/>
        <Catalogue />
        <Recommended />
        </>
    )
}
