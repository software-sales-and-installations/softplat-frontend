import { FC } from 'react';
import { Categories } from '../../components/Categories/Categories';
import Catalogue from '../../components/Catalogue/Catalogue';
import Slider from '../../components/Slider/Slider';
import Recommended from '../../components/Recommended/Recommended';

export const HomePage: FC = () => {
    return (
        <>
        <Categories />
        {/* <Slider />
        <Catalogue />
        <Recommended /> */}
        </>
    )
}
