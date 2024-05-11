// Home.jsx
import React from 'react';
import Footer from './footer';
import Nav from './navigation';
import Header from './header';

const Home = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the Home Page!</p>
    </div>
    <Footer/>
    </>
  );
};

export default Home;
