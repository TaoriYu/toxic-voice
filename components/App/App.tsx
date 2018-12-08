import * as React from 'react';

import { Grid } from 'semantic-ui-react';
import { MicroButton } from './MicroButton/MicroButton';

export default class App extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <Grid container centered className="">
        <Grid.Row centered>
          <Grid.Column>
            <MicroButton />
              <div>two</div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
