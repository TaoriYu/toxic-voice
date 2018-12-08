import App from '../components/App/App';
import React from 'react';
import Head from '../components/head';

const Home = () => (
  <div>
    <Head title="home" />
    <App />
    <button onClick={() => (new Audio()).record()} />
  </div>
);

export default Home;
