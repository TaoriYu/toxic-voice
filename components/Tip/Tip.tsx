import * as React from 'react';
import { Transition } from 'semantic-ui-react';
import * as styles from './tip.css';

export interface ITipProps {
  message: string;
}

export interface ITipState {
  visible: boolean;
}

const SHOW_TIP_TIMEOUT = 1000;
const HIDE_TIP_TIMEOUT = 5000;
const SHOW = 500;
const HIDE = 500;

export class Tip extends React.PureComponent<ITipProps, ITipState> {
  public state: ITipState = {
    visible: false,
  };

  public componentDidMount(): void {
    setTimeout(this.showTip, SHOW_TIP_TIMEOUT);
    setTimeout(this.hideTip, HIDE_TIP_TIMEOUT);
  }

  public render() {
    const { visible } = this.state;
    const { message } = this.props;

    return (
      <Transition duration={{ hide: HIDE, show: SHOW }} visible={visible}>
        <div className={styles.tip}>
          { message }
        </div>
      </Transition>
    );
  }

  private showTip = () => {
    this.setState({ visible: true });
  }

  private hideTip = () => {
    this.setState({ visible: false });
  }
}
