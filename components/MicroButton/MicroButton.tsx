import * as React from 'react';
import * as styles from './microButton.css';

import { MicrophoneIcon } from '../incons';

export function MicroButton() {
  return(
    <div className={styles.centered}>
      <div className={styles.rounded}>
        <MicrophoneIcon />
      </div>
    </div>
  );
}
