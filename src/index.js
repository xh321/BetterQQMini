const fs = require("fs");
const { output } = require("./main/base.js");

output("Initializing...");

require("./main/index.js");

// 继续执行QQNT小程序启动
output("Starting QQNT Miniprogram...");

// directory path
const dir = __dirname + "/../../";

// list all files in the directory
fs.readdir(dir, (err, files) => {
  if (err) {
    throw err;
  }

  // files object contains all files names
  // log them on console
  files.forEach((file) => {
    console.log(file);
    if (file.endsWith(".asar")) {
      require("../../" + file + "/main/app.js");
    }
  });
});
