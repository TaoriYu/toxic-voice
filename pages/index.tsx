import React from 'react';
import {Geo} from '../services/Geo';
import {Audio} from '../services/Audio';
import Head from '../components/head';
import App from '../components/App/App';
import {Provider} from 'mobx-react';

const GeoStore = new Geo();
const AudioStore = new Audio();

function Home() {
  return <div>
    <Head title="Home"/>
    <Provider geo={GeoStore} audio={AudioStore}>
      <App/>
    </Provider>
  </div>;
}

export default Home;
