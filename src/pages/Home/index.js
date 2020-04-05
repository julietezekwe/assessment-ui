import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Body from '../../components/Body';
import Profile from '../../components/Profile';

const Home = () => {
  return (
    <>
      <Header />
      <Profile />
      <Body />
      <Footer />
    </>
  );
};

export default Home;
