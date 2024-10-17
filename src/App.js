import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'; // Home will now include About and Contact sections
import Notes from './components/Notes';
import Checkout from './components/Checkout';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {/* Route-based sections */}
          <Routes>
            <Route path="/" element={<Home />} /> {/* Home includes scroll sections */}
            <Route path="/notes" element={<Notes />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
