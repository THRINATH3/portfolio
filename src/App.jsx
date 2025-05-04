import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Mypage from './components/mypage/Mypage';

function App() {
  return (
    <div className='font' >
      <Header />
      <div style={{ minHeight: '100vh', minWidth: '100%' }}>
        <Mypage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
