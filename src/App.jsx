import { Outlet } from 'react-router';
import './App.css';
import Footer from './Component/Footer';
import Navbar from './Component/Navbar';
// import { useState } from 'react';
import Home from './Pages/Home';

function App() {
  // const [app, setApp] = useState([]);

  // fetch('/data.json')
  //   .then(res => res.json())
  //   .then(data => setApp(data));

  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
