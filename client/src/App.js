import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import UserRoutes from './routes/UserRoutes';

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <UserRoutes />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
