import * as React from 'react';
import * as styles from './successCheck.css';

interface ISuccessCheckProps {}
interface ISuccessCheckState {}

export class SuccessCheck extends React.PureComponent<ISuccessCheckProps, ISuccessCheckState> {
  public state = {};

  public render() {
    return(
      <div className={styles.check_mark}>
        <div className={`${styles.sa_icon} ${styles.sa_success} ${styles.animate}`}>
          <span className={`${styles.sa_line} ${styles.sa_tip} ${styles.animateSuccessTip}`}></span>
          <span className={`${styles.sa_line} ${styles.sa_long} ${styles.animateSuccessLong}`}></span>
          <div className={`${styles.sa_placeholder}`}></div>
          <div className={`${styles.sa_fix}`}></div>
        </div>
      </div>
    );
  }
}
