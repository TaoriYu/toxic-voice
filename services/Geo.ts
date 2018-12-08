import {observable, action} from 'mobx';

export class Geo {
  @observable public isPicked: boolean = false;
  public latitude?: number;
  public longitude?: number;

  @action public pickCurrentLocation() {
    navigator.geolocation.getCurrentPosition( (position) => {
      this.isPicked = true;
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
    });
  }
}
