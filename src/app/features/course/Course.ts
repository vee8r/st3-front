export class Course {
  constructor(public title: string, public description: string, public lessons: string) {}

  public getTitle(): string {
    return this.title;
  }

  public getDescription(): string {
    return this.description;
  }

  public getLessons(): string {
    return this.lessons;
  }

  public setTitle(title: string): void {
    this.title = title;
  }

  public setDescription(description: string): void {
    this.description = description;
  }

  public setLessons(lessons: string): void {
    this.lessons = lessons;
  }

  public toString(): string {
    return `Course: ${this.title}, ${this.description}, ${this.lessons}`;
  }


}
