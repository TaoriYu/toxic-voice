import {Api} from './api';
import {action, observable, reaction} from 'mobx';
import {Audio} from './Audio';
import {Geo} from './Geo';

export class Main extends Api {
  @observable public queryString: string = '';
  @observable private fetching = false;
  @observable private fetched = false;

  @action public getQS(geo: any, blob: Blob) {
    this.fetched = false;
    this.fetching = true;
    this.api.post(
      '/speech-search/',
      blob,
      {
        headers: {
          'X-GeoLat': geo.latitude,
          'X-GeoLng': geo.longitude
        }
      }
    ).then(({ data }) => {
      this.queryString = data.queryString;
      this.fetched = true;
      this.fetching = false;
    });
  }

  public setUpReaction(audio: Audio, geo: Geo) {
    reaction(
      () => [audio.isRecorded, geo.isPicked],
      ([recorded, picked]) => {
        if (recorded && picked) {
          this.getQS(geo, audio.blob);
        }
      }
    );
  }
}
