import { FC } from 'react';
import { Header } from '../../components/Header/Header';
import { Categories } from '../../components/Categories/Categories';

export const HomePage: FC = () => {
    return (
        <>
        <Header loggedIn={true}/>
        <Categories />
        </>
    )
}
