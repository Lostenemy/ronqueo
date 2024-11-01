import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Form from './pages/Form';
import ThankYou from './pages/ThankYou';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registro" element={<Form />} />
            <Route path="/gracias" element={<ThankYou />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;