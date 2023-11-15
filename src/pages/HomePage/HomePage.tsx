import { FC } from 'react';
import Catalogue from '../../components/Catalogue/Catalogue';
import Slider from '../../components/Slider/Slider';
import Recommended from '../../components/Recommended/Recommended';
import { Categories } from '../../components/Categories/Categories';

export const HomePage: FC = () => {
    return (
        <>
        <Categories/>
        <Slider />
        <Catalogue />
        <Recommended />
        </>
    )
}
