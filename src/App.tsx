import { Route, Routes } from 'react-router-dom';
import Personal from '../src/pages/Personal/Personal';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { MainWrapper } from './components/MainWrapper/MainWrapper';

function App() {
  return (
    <>
      <Header loggedIn={false} />
      <MainWrapper>
      <Personal />
        <Routes>
          {/* <Route path="/personal" element={<Personal />} /> */}
          {/* 
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
    </>
  );
}

export default App;
