import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/mainPage/MainPage';
import NotFoundPage from './pages/notFoundPage/NotFoundPage';
import CharactersFacultiesPage from './pages/charactersFacultiesPage/CharactersFacultiesPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/faculties" element={<AllCharactersPage />} /> */}
        <Route path="/students" element={<CharactersFacultiesPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
