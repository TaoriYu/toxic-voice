import * as React from 'react';
import * as styles from './microButton.css';

import { MicrophoneIcon } from '../incons';

interface IMicroButtonProps {
  onClick(): void;
}

export function MicroButton({ onClick }: IMicroButtonProps) {
  return(
    <div onClick={onClick} className={styles.centered}>
      <div className={`${styles.rounded} ${styles.loading}`}>
        <MicrophoneIcon />
      </div>
    </div>
  );
}
