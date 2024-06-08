import {Course} from "./Course";
import {Resource} from "./Resource";

export class Lesson {

  public id: number = 0;
  public title: string = "";

  public content: string = "";

  public sequence: number = 0;

  public course: Course = new Course();

  public resources: Array<Resource> = [];
}
