import * as React from 'react';
import * as styles from './app.css';

import { Tip } from '../Tip';
import { Grid } from 'semantic-ui-react';
import { MicroButton } from '../MicroButton/MicroButton';
import {inject, observer} from 'mobx-react';
import {Audio} from '../../services/Audio';
import {Geo} from '../../services/Geo';
import {Main} from '../../services/Main';

interface IAppProps {
  audio?: Audio;
  geo?: Geo;
}

@inject('audio')
@inject('geo')
@observer
export default class App extends React.Component<IAppProps, {}> {
  public render() {
    return (
      <Grid container centered className={styles.topMargin}>
        <Grid.Row centered>
          <Grid.Column className={styles.centered}>
            <MicroButton onClick={this.getAudioAndGeo} />
            <Tip message="Коснитесь микрофона и назовите запрос" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }

  private getAudioAndGeo = () => {
    const {audio, geo} = this.props;
    new Main().setUpReaction(audio!, geo!);
    geo!.pickCurrentLocation();
    audio!.record();
  }
}
