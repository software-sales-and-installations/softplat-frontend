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
import { Admin } from './pages/Admin/Admin.tsx';
import { Product } from './components/Product/Product.tsx';
import { ProtectedRouteForAdmin, ProtectedRouteForAdminAuth
  // ProtectedRouteForBuyer, ProtectedRouteForSeller 
} from './components/ProtectedRoute/ProtectedRoute.tsx';
import NotFound from './pages/NotFound/NotFound.tsx';

function App() {
  return (
    <>
      <Header />
      <MainWrapper>
        <Routes>
          <Route path='/' element={<Navigate to='/catalog'/>}/>
          <Route path="/catalog" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/product/demo" element={<Product />} />
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
          <Route path='/producers/:id' element={<VendorPage/>}/>
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/search" element={<Search />} />
          {/* <Route path="/demoapi" element={<DemoApi />} /> */}
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
                <Navigate to="/seller/published" />
              //</ProtectedRouteForSeller>
            } />
          <Route
            path="/admin/*"
            element={
              <ProtectedRouteForAdmin>
                <Admin/>
              </ProtectedRouteForAdmin>
            } />
          <Route
            path="/admin"
            element={
              <ProtectedRouteForAdmin>
                <Navigate to="/admin/published" />
              </ProtectedRouteForAdmin>
            } />
            <Route 
            path="/admin-auth" 
            element={
              <ProtectedRouteForAdminAuth>
                <Navigate to="/" />
              </ProtectedRouteForAdminAuth>
            } />
            <Route path='*' element={<NotFound />} />
        </Routes>
      </MainWrapper>
      <Footer />
    </>
  );
}

export default App;
