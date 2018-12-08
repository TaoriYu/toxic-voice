import * as React from 'react';
import { MicrophoneIcon } from '../incons';

import * as styles from './microButton.css';

interface IMicroButtonProps {
  onClick(): void;
}

export function MicroButton({onClick}: IMicroButtonProps) {
  return(
    <div onClick={onClick} className={styles.centered}>
      <div className={styles.rounded}>
        <MicrophoneIcon />
      </div>
    </div>
  );
}
