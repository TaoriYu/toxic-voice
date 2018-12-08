import * as React from 'react';
import { MicrophoneIcon } from '../incons';

import * as styles from './microButton.css';

export function MicroButton() {
  return(
    <div className={styles.centered}>
      <div className={styles.rounded}>
        <MicrophoneIcon />
      </div>
    </div>
  );
}
