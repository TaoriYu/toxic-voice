import React from 'react';
import Head from '../components/head';
import Nav from '../components/nav';
import { Audio } from '../services/Audio';

const Home = () => (
  <div>
    <Head title="Home" />
    <Nav />
    <button onClick={() => (new Audio()).record()} />
  </div>
);

export default Home;
