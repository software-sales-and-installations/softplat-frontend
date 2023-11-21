import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { Header } from './components/Header/Header';
import { MainWrapper } from './components/MainWrapper/MainWrapper';
import { Footer } from './components/Footer/Footer';
import { ProductPage } from './pages/ProductPage/ProductPage';
import {FAQ} from './pages/FAQ/FAQ';
import VendorPage from './pages/VendorPage/VendorPage';
import Contacts from './pages/Contacts/contacts.tsx';
// import Catalog from './pages/Catalog/Catalog.tsx';
import CatalogSection from './pages/CatalogSection/CatalogSection.tsx';
import Personal from './pages/Personal/Personal.tsx';
import { Producers } from './pages/Producers/Producers.tsx';

function App() {
  return (
    <>
      <Header loggedIn={false} />
      <MainWrapper>
        <Routes>
          <Route path='/' element={<Navigate to='/catalog'/>}/>
          <Route path="/catalog" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path='/faq' element={<FAQ/>} />
          {/* <Route path='/vendor' element={<VendorPage />} /> */}
          <Route path="/contacts" element={<Contacts />} />
          {/* <Route path="/catalog" element={<Catalog />} /> */}
          <Route path="/catalog/:section" element={<CatalogSection />} />
          <Route path="/personal/*" element={<Personal />} />
          <Route path='/producers' element ={<Producers/>}/>
          <Route path='/producers/:vendor' element={<VendorPage/>}/>
          {/* <Route path="/personal" element={<Personal />} />
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
