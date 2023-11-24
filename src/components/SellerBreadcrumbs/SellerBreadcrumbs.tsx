import { Box, Breadcrumbs, Link } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Routes, Route } from 'react-router-dom';

const SellerBreadcrumbs = () => {
  return (
    <Box>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<NavigateNextIcon fontSize="small" />}
      >
        <Link underline="none" color="black" href="/">
          Главная
        </Link>
        <Link underline="none" color="black" href="/seller">
          Личный кабинет
        </Link>
        <Routes>
          <Route path="/products" element={<p>Мои товары</p>} />
          <Route path="/analysis" element={<p>Аналитика</p>} />
          <Route path="/settings/*" element={<p>Настройки</p>} />
          <Route path="/signOut" element={<p>Выйти из профиля</p>} />
        </Routes>
      </Breadcrumbs>
    </Box>
  );
};

export default SellerBreadcrumbs;
