export class Resource {
  constructor(
    public _id: number,
    public _title: string,
    public _url: string,
    public _type: string,
    public _lessonId: number
  ) {}

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get lessonId(): number {
    return this._lessonId;
  }

  set lessonId(value: number) {
    this._lessonId = value;
  }
}
