const fs = require('fs');
const path = require('path');
var request = require("request");

module.exports = {
  status: {
    credencialPath: "",
    folderPath: ""
  },
  readCredenciales: function () {
    var options = { encoding: 'utf-8', flag: 'r' };
    var buffer = fs.readFileSync(this.status.credencialPath, options);
    return JSON.parse(buffer);
  },
  deleteFolderFiles: function () {
    fs.readdir(this.status.folderPath, (err, files) => {
      if (err) {
        throw err;
      }
      for (const file of files) {
        fs.unlink(path.join(this.status.folderPath, file), err => {
          if (err) throw err;
        });
      }
    });
  },
  saveToFile: function (file, data) {
    var options = { encoding: 'utf-8', flag: 'w' };
    fs.writeFileSync(file, data, options);
  },
  saveFiltersById: function (URL, token, filters) {
    filters.map(item => {
      if (item.id) {
        request.get({
          "headers": {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': token
          },
          "url": URL + '/services/v1/filters/' + item.id + '/contents/list',
          "body": "{}"
        }, (error, response, body) => {
            if (JSON.parse(body)[0].error) {
              this.saveToFile(this.status.folderPath + '/filter_' + item.type + "_" + item.id + '_ERROR.json', body);
            }
             else {
              if (JSON.parse(body)[0].contents) {
                if (JSON.parse(body)[0].contents.length >= 0) {
                  this.saveToFile(this.status.folderPath + '/filter_' + item.type + "_" + item.id + '.json',
                    JSON.stringify(JSON.parse(body)[0].contents)
                  );
                }
              }
              else {
                this.saveToFile(this.status.folderPath + '/ELSE_filter_' + item.type + "_" + item.id + '_ERROR.json', body);
              }
            }

        });
      }
    });
  }
};



