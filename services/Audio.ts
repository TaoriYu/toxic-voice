import {observable} from 'mobx';
import {Api} from './api';

export class Audio extends Api {
  @observable public isRecording: boolean = false;
  @observable public isRecorded: boolean = false;
  public blob?: any;

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
          this.blob = new Blob(audioChunks, { type : 'audio/ogg; codecs=opus' });
          this.isRecording = false;
          this.isRecorded = true;
          // this.api.post('/speech-search/', this.blob);
        });

        setTimeout(() => {
          mediaRecorder.stop();
        },         6000);
      });
  }
}
