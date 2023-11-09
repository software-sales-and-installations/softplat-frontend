import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../../pages/HomePage/HomePage';
import { Header } from '../Header/Header';
import { Categories } from '../Categories/Categories';
import { MainWrapper } from '../MainWrapper/MainWrapper';
import { Footer } from '../Footer/Footer';

import style from './App.module.scss';
import { ProductPage } from '../../pages/ProductPage/ProductPage';

function App() {
  return (
    <div className={style.app}>
      <Header loggedIn={true} />
      <Categories />
      <MainWrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game" element={<ProductPage />} />
          {/* <Route path="/personal" element={<Personal />} />
          <Route path="/catalog" element={<Сatalog />} />
          <Route path="/productcard" element={<ProductCard />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/successfulpurchase" element={<SuccessfulPurchase />} />
          <Route path="error" element={<Error />} />
          <Route path="/sellercard" element={<SellerCard />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/manufacturerscard" element={<ManufacturersCard />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/all-broken" element={<AllBroken />} />
          <Route path="/cookies" element={<Cookies />} /> */}
        </Routes>
      </MainWrapper>
      <Footer />
    </div>
  );
}

export default App;
