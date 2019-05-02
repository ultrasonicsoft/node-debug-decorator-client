import { Debug } from "ng-debug-decorator";

export class DataService {

  public getData() {
    const data = "Hello World!!!";
    this.printData(data);
    return data;
  }

  @Debug()
  public printData(data: string) {
    // tslint:disable-next-line:no-console
    console.log("DEBUG: " + data);

  }
}
