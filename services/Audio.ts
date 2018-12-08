import {observable} from 'mobx';

export class Audio {
    @observable public isRecording: boolean = false;
    @observable public isRecorded: boolean = false;
    public blod?: any;
}
