import * as React from 'react';
import * as styles from './microButton.css';

import {MicrophoneIcon} from '../incons';
import {inject, observer} from 'mobx-react';
import {Main} from '../../services/Main';

interface IMicroButtonProps {
  main?: Main;
  onClick?(): void;
  onMouseDown(): void;
  onMouseUp(): void;
}

@inject('main')
@observer
export class MicroButton extends React.Component<IMicroButtonProps> {
  public render() {
    const {onClick, onMouseDown, onMouseUp, main} = this.props;
    const loading = main!.fetching;
    return (
      <div onMouseDown={onMouseDown} onMouseUp={onMouseUp} onClick={onClick} className={styles.centered}>
        <div className={`${styles.rounded} ${loading ? styles.loading : ''}`}>
          <MicrophoneIcon/>
        </div>
      </div>
    );
  }
}
