import { FC } from 'react';
import Catalogue from '../../components/Catalogue/Catalogue';
import Slider from '../../components/Slider/Slider';
import Recommended from '../../components/Recommended/Recommended';

export const HomePage: FC = () => {
    return (
        <>
        <Slider />
        <Catalogue />
        <Recommended />
        </>
    )
}
