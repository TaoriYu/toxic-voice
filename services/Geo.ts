import {observable} from 'mobx';

export class Geo {
    @observable public isPicking: boolean = false;
    @observable public isPicked: boolean = false;
    public latitude?: number;
    public longitude?: number;
}
