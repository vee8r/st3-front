class Lesson{
  constructor(public title: string, public content: string, public sequence: number) {

  }

  public getTitle(): string {
    return this.title;
  }

  public getContent(): string {
    return this.content;
  }

  public getSequence(): number {
    return this.sequence;
  }

  public setTitle(title: string): void {
    this.title = title;
  }

  public setContent(content: string): void {
    this.content = content;
  }

  public setSequence(sequence: number): void {
    this.sequence = sequence;
  }

  public toString(): string {
    return `Lesson: ${this.title}, ${this.content}, ${this.sequence}`;
  }



}

// title;
//
// private String content;
//
// private int sequence;
