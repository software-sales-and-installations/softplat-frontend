import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { Header } from './components/Header/Header';
import { MainWrapper } from './components/MainWrapper/MainWrapper';
import { Footer } from './components/Footer/Footer';
import { ProductPage } from './pages/ProductPage/ProductPage';
import {FAQ} from './pages/FAQ/FAQ';
import VendorPage from './pages/VendorPage/VendorPage';
import Contacts from './pages/Contacts/contacts.tsx';
import CatalogSection from './pages/CatalogSection/CatalogSection.tsx';
import Personal from './pages/Personal/Personal.tsx';
import { Producers } from './pages/Producers/Producers.tsx';
import { ShoppingCart } from './pages/ShoppingCart/ShoppingCart.tsx';
import Search from './pages/Search/Search.tsx';
import { Seller } from './pages/Seller/Seller.tsx';
// import { ProtectedRouteForAdmin, ProtectedRouteForBuyer, ProtectedRouteForSeller } from './components/ProtectedRoute/ProtectedRoute.tsx';

function App() {
  return (
    <>
      <Header />
      <MainWrapper>
        <Routes>
          <Route path='/' element={<Navigate to='/catalog'/>}/>
          <Route path="/catalog" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path='/faq' element={<FAQ/>} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/catalog/:section" element={<CatalogSection />} />
          <Route 
            path="/personal/*" 
            element={
              //<ProtectedRouteForBuyer>
                <Personal />
              //</ProtectedRouteForBuyer>
              } />
          <Route 
            path="/personal" 
            element={
              //<ProtectedRouteForBuyer>
                <Navigate to='/personal/purchases' />
              // </ProtectedRouteForBuyer>
            } />
          <Route path='/producers' element ={<Producers/>}/>
          <Route path='/producers/:vendor' element={<VendorPage/>}/>
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/search" element={<Search />} />
          <Route 
            path="/seller/*" 
            element={
              // <ProtectedRouteForSeller>
                <Seller />
              // </ProtectedRouteForSeller> 
            } />
          <Route 
            path="/seller" 
            element={
              //<ProtectedRouteForSeller>
                <Navigate to="/seller/products" />
              //</ProtectedRouteForSeller>
            } />
          <Route 
            path="/admin/*" 
            element={
              //<ProtectedRouteForAdmin>
                <></>
              //</ProtectedRouteForAdmin>
            } />
          <Route 
            path="/admin" 
            element={
              //<ProtectedRouteForAdmin>
                <Navigate to="/admin/product-cards" />
              //</ProtectedRouteForAdmin>
            } />
        </Routes>
      </MainWrapper>
      <Footer />
    </>
  );
}

export default App;
