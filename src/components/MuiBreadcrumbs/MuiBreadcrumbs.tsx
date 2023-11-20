import { Box, Breadcrumbs, Link } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Routes, Route } from 'react-router-dom';

const MuiBreadcrumbs = () => {
  return (
    <Box m={2}>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<NavigateNextIcon fontSize="small" />}
      >
        <Link underline="none" color="black" href="/">
          Главная
        </Link>
        <Link underline="none" color="black" href="/personal">
          Личный кабинет
        </Link>
        <Routes>
          <Route path="/purchases" element={<p>Мои покупки</p>} />
          <Route path="/favorites" element={<p>Избранное</p>} />
        </Routes>
      </Breadcrumbs>
    </Box>
  );
};

export default MuiBreadcrumbs;
