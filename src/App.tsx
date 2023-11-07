import { Route, Routes } from 'react-router-dom'
import './App.css';
import { PopupForAuth } from './components/AuthPopup/PopupForAuth';
import { useSelector } from 'react-redux';
import { RootState } from './services/redux/store';
import { PopupForReg } from './components/RegPopup/PopupForReg';



function App() {
  return (
   <>
        {useSelector((state: RootState) => state.toggleBtn.value) ? (
				<PopupForReg />) : (<PopupForAuth />)
			}
</>
    // <div className={styles.page+}>
    //   <Header />
    //   <MainWrapper>
    //     <Routes>
    //       <Route path="/" element={<HomePage />} />
    //       <Route path="/personal" element={<Personal />} />
    //       <Route path="/catalog" element={<Сatalog />} />
    //       <Route path="/productcard" element={<ProductCard />} />
    //       <Route path="/cart" element={<Cart />} />
    //       <Route path="/payments" element={<Payments />} />
    //       <Route path="/successfulpurchase" element={<SuccessfulPurchase />} />
    //       <Route path="error" element={<Error />} />
    //       <Route path="/sellercard" element={<SellerCard />} />
    //       <Route path="/contacts" element={<Contacts />} />
    //       <Route path="/manufacturerscard" element={<ManufacturersCard />} />
    //       <Route path="/faq" element={<FAQ />} />
    //       <Route path="*" element={<NotFound />} />
    //       <Route path="/all-broken" element={<AllBroken />} />
    //       <Route path="/cookies" element={<Cookies />} />
    //         </Routes>
    //   </MainWrapper>
    //   <Footer />
    // </div>
  )
}

export default App
