import * as React from 'react';
import * as styles from './soundWaves.css';

interface ISoundWavesProps {
}

interface ISoundWavesState {
}

export class SoundWaves extends React.PureComponent<ISoundWavesProps, ISoundWavesState> {
  public state = {};

  private barsArray: number[];

  public constructor(props: ISoundWavesProps) {
    super(props);
    this.barsArray = new Array<number>(90).fill(1);
  }

  public render() {
    return (
      <div className={styles.bars}>
        { this.barsArray.map((item: number, i: number) => {
          const left = (i * 2) + 1;
          const anim = Math.floor(Math.random() * 75 + 400);
          const height = Math.floor(Math.random() * 25 + 3);

          return (
            <div
              key={i}
              className={styles.bar}
              style={{left: `${left}px`, animationDuration: `${anim}ms`, height: `${height}px`}}
            />

        )})}
      </div>
    );
  }
}
