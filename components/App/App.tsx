import * as React from 'react';
import {SoundWaves} from '../SoundWaves/SoundWaves';
import * as styles from './app.css';

import {Tip} from '../Tip';
import {Grid} from 'semantic-ui-react';
import {MicroButton} from '../MicroButton/MicroButton';
import {inject, observer} from 'mobx-react';
import {Audio} from '../../services/Audio';
import {Geo} from '../../services/Geo';
import {Main} from '../../services/Main';

interface IAppProps {
  audio?: Audio;
  geo?: Geo;
  main?: Main;
}

@inject('audio')
@inject('geo')
@inject('main')
@observer
export default class App extends React.Component<IAppProps, {}> {
  public render() {
    const qs = this.props.main!.queryString;
    const recording = this.props.audio!.isRecording;
    const recognisedText = this.props.main!.recognisedText;
    return (
      <Grid container centered className={styles.topMargin}>
        <Grid.Row centered>
          <Grid.Column className={styles.centered}>
            <Tip message="Коснитесь микрофона и назовите запрос"/>
            <MicroButton onMouseDown={this.startRecording} onMouseUp={this.getAudioAndGeo}/>
            {recording && <SoundWaves/>}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column>
            {!recording && recognisedText &&
              <div style={{
                fontSize: '1.4em',
                lineHeight: '1.4em',
                color: 'gray',
                textAlign: 'center'
              }}>Вот что удалось найти по вашему запросу: "{recognisedText}" </div>
            }
            <br/>
            <br/>
            {qs &&
            <iframe src={`https://www.cian.ru/cat.php?${qs}`} style={{
              width: '100%',
              height: 700,
              border: 0,
            }}/>
            }
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }

  private startRecording = () => {
    this.props.audio!.record();
  };

  private getAudioAndGeo = () => {
    const {audio, geo} = this.props;
    geo!.pickCurrentLocation();
    audio!.stop();
  };
}
