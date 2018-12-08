import React from 'react';
import {Geo} from '../services/Geo';
import {Audio} from '../services/Audio';
import Head from '../components/head';
import App from '../components/App/App';
import {Provider} from 'mobx-react';
import {Main} from '../services/Main';

const GeoStore = new Geo();
const AudioStore = new Audio();
const MainStore = new Main();
MainStore.setUpReaction(AudioStore!, GeoStore!);

function Home() {
  return <div>
    <Head title="Home"/>
    <Provider geo={GeoStore} audio={AudioStore} main={MainStore}>
      <App/>
    </Provider>
  </div>;
}

export default Home;
