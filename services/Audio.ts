import {observable} from 'mobx';
import {Api} from './api';

export class Audio extends Api {
  @observable public isRecording: boolean = false;
  @observable public isRecorded: boolean = false;
  public blod?: any;

  public record() {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then((stream) => {
        // @ts-ignore
        const mediaRecorder = new MediaRecorder(stream);
        this.isRecording = true;
        this.isRecorded = false;
        mediaRecorder.start();

        const audioChunks: any[] = [];

        mediaRecorder.addEventListener('dataavailable', (event: any) => {
          audioChunks.push(event.data);
        });

        mediaRecorder.addEventListener('stop', () => {
          this.isRecording = false;
          this.isRecorded = true;
          this.blod = new Blob(audioChunks, { type : 'audio/ogg; codecs=opus' });
          // this.api.post('/speech-search/', this.blod);
        });

        setTimeout(() => {
          mediaRecorder.stop();
        },         4000);
      });
  }
}
