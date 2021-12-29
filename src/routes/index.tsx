import * as React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '../components';

const MainRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default MainRoutes;
