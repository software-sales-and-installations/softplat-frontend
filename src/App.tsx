import { Route, Routes } from 'react-router-dom'
import { FC, useEffect, useState } from 'react';
import './App.css';
import { PopupForAuth } from './components/Popup/PopupForAuth';
import Providers from './utils/provider';
import { useDispatch, useSelector } from 'react-redux';
import { openLoginPopup } from './components/Popup/AuthSlise';
import { RootState } from './services/redux/store';
import { PopupForReg } from './components/Popup/PopupForReg';



function App() {
  const dispatch = useDispatch();
  return (
   <>
        <button onClick={()=>dispatch(openLoginPopup(true))}></button>
        {useSelector((state: RootState) => state.registerPopup.value) && (
				<PopupForReg />
			)}
			{useSelector((state: RootState) => state.loginPopup.value) && <PopupForAuth />}
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
