export class AppMessage {
  public info: boolean;
  public message: string;

  constructor(info: boolean, message:string) {
    this.info = info;
    this.message = message;
  }
}
