import React from 'react';
import { getHomeMessage } from './home';
import Navbar from '../../components/Navbar';

function HomeView() {
  return (
    <>
      <Navbar />
      <h1>{getHomeMessage()}</h1>
    </>
  );
}

export default HomeView;