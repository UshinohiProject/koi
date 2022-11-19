import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import ScrollToTop from './components/molecules/ScrollToTop'
import Top from './components/molecules/Top'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route exact path={`/`} element={<Top />} />
      </Routes>
    </Router>
  );
}

export default App;
