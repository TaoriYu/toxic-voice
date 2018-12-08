import {action, observable} from 'mobx';
import {Api} from './api';

export class Audio extends Api {
  @observable public isRecording: boolean = false;
  @observable public isRecorded: boolean = false;
  public mediaRecorder: any;
  public blob?: any;

  public constructor() {
    super();
    this.init();
  }

  public init() {
    if (typeof navigator !== 'undefined') {
      navigator.mediaDevices.getUserMedia({ audio: true })
        .then((stream) => {
          // @ts-ignore
          this.mediaRecorder = new MediaRecorder(stream);
          const audioChunks: any[] = [];

          this.mediaRecorder.addEventListener('dataavailable', (event: any) => {
            audioChunks.push(event.data);
          });

          this.mediaRecorder.addEventListener('stop', () => {
            this.blob = new Blob(audioChunks, { type : 'audio/ogg; codecs=opus' });
            this.isRecording = false;
            this.isRecorded = true;
            this.init();
          });
        });
    }
  }

  @action public record() {
    this.isRecording = true;
    this.mediaRecorder.start();
  }

  @action public stop() {
    this.isRecording = false;
    this.mediaRecorder.stop();
  }
}
