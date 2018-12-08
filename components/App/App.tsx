import * as React from 'react';
import { SoundWaves } from '../SoundWaves/SoundWaves';
import * as styles from './app.css';

import { Tip } from '../Tip';
import { Grid } from 'semantic-ui-react';
import { MicroButton } from '../MicroButton/MicroButton';

export default class App extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <Grid container centered className={styles.topMargin}>
        <Grid.Row centered>
          <Grid.Column className={styles.centered}>
            <Tip message="Коснитесь микрофона и назовите запрос" />
            <MicroButton />
            <SoundWaves />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
