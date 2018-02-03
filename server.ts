import app from "./app";
const port: number = 4040;

app.listen(port, () =>
  console.log("express server listening on port: " + port)
);
