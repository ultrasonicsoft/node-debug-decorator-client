import express from "express";
import { DataService } from "./data.service";

const app = express();
const port = 8080; // default port to listen

let dataService: DataService;

if (process.env.NODE_ENV === "development") {
  // tslint:disable-next-line:no-console
  console.log("Running in Development mode...");
} else if (process.env.NODE_ENV === "production") {
  // tslint:disable-next-line:no-console
  console.log("Running in Production mode...");
}

// define a route handler for the default home page
app.get("/", (req, res) => {
  const data = dataService.getData();
  res.send(data);
});

// start the Express server
app.listen(port, () => {
  dataService = new DataService();
  // tslint:disable-next-line:no-console
  console.log(process.env.NODE_ENV);

  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
