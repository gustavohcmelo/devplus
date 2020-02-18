import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';


import './global.css';
import './Header.css';
import './Sidebar.css';

function App() {
  return (
    <>
      <Header />
      <div id="content">
        <Sidebar />
      </div>
    </>
  );
}

export default App;
