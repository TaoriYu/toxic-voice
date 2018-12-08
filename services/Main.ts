import {Api} from './api';
import {action, observable, reaction} from 'mobx';
import {Audio} from './Audio';
import {Geo} from './Geo';

export class Main extends Api {
  @observable public queryString: string = '';
  @observable public recognisedText = '';
  @observable public fetching = false;
  @observable private fetched = false;

  @action public getQS(geo: any, audio: Audio) {
    this.fetched = false;
    this.fetching = true;
    this.api.post(
      '/speech-search/',
      audio.blob,
      {
        headers: {
          'X-GeoLat': geo.latitude,
          'X-GeoLng': geo.longitude
        }
      }
    ).then(({ data }) => {
      this.queryString = data.queryString;
      this.recognisedText = data.recognisedText;
      this.fetched = true;
      this.fetching = false;
      audio.isRecorded = false;
    }).catch(() => {
      this.fetched = false;
      this.fetching = false;
    });
  }

  public setUpReaction(audio: Audio, geo: Geo) {
    reaction(
      () => audio.isRecorded,
      (recorded) => {
        if (recorded) {
          this.getQS(geo, audio);
        }
      }
    );
  }
}
