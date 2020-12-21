var fs = require('fs')

var path = require("path")
function myLog(msg,relativePath){

  ensureDirectoryExistence(relativePath)
  var msg =new Date() + msg + "\r\n"

    fs.writeFile(relativePath, msg, {flag:'a'}, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
}

function ensureDirectoryExistence(filePath) {
  var dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}


myLog("hi","test/test.txt")