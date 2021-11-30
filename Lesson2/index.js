const fs = require("fs");

fs.readFile("demo.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error find");
  } else {
    console.log(data);
  }
});
