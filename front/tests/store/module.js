var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);

var Login = require('../helpers/Login.js');
var FileHelper = require('../helpers/Files.js');
var UserData = require('./user.data.js');
var ModuleData = require('./module.data.js');
var Hosts = require('../helpers/Hosts.js');

var apiUrl = Hosts.getUrl();

FileHelper.status.folderPath = __dirname + '/data';
FileHelper.status.credencialPath = __dirname + '/../credenciales.txt';
FileHelper.deleteFolderFiles();

Login.chai = chai;
Login.FileHelper = FileHelper;
Login.path = __dirname + '/token';


describe('Module', function () {

  it("Login", function (done) {
    Login.login(apiUrl, UserData.login, done);
  });

  it("Save module[0]", function (done) {
    chai.request(apiUrl)
      .post("/module")
      .send(ModuleData.module[0])
      .set('Authorization', 'Bearer ' + Login.token)
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/module_0.post.json', res.text);
        const response = JSON.parse(res.text);
        chai.expect(response).to.have.property('status');
        chai.expect(response).to.have.property('data');
        chai.expect(response.data).to.have.property('id');
        chai.expect(response.data).to.have.property('row_count');
        chai.expect(response.data.row_count).to.equal(1);
        ModuleData.module[0].id_modulo = response.data.id;
        done();
      });
  });

  it("Update module", function (done) {
    var _module = ModuleData.getOneUpdate();
    chai.request(apiUrl)
      .put("/module/" + _module.id_modulo)
      .send(_module)
      .set('Authorization', 'Bearer ' + Login.token)
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/module.updated.id.' + _module.id_modulo + '.json', res.text);
        const response = JSON.parse(res.text);
        chai.expect(response).to.have.property('status');
        chai.expect(response.status).to.equal("ok");
        chai.expect(response).to.have.property('data');
        chai.expect(response.data).to.have.property('row_count');
        chai.expect(response.data.row_count).to.equal(1);
        done();
      });
  });

  it("List By Id", function (done) {
    var id = ModuleData.module[0].id_modulo;
    chai.request(apiUrl)
      .get("/module/" + id)
      .set('Authorization', 'Bearer ' + Login.token)
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/moduleById.' + id + '.json', res.text);
        const response = JSON.parse(res.text);
        chai.expect(response).to.have.property('status');
        chai.expect(response).to.have.property('data');
        chai.expect(response.status).to.equal("ok");
        done();
      });
  });

  it("List", function (done) {
    chai.request(apiUrl)
      .get("/module")
      .set('Authorization', 'Bearer ' + Login.token)
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/module.json', res.text);
        const response = JSON.parse(res.text);
        chai.expect(response).to.have.property('status');
        chai.expect(response).to.have.property('data');
        chai.expect(response.data).to.be.an('array');
        chai.expect(response.status).to.equal("ok");
        done();
      });
  });

  it("Delete By Id", function (done) {
    var id = ModuleData.module[0].id_modulo;
    chai.request(apiUrl)
      .delete("/module/" + id)
      .set('Authorization', 'Bearer ' + Login.token)
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/module.delete.id.' + id + '.json', res.text);
        const response = JSON.parse(res.text);
        chai.expect(response).to.have.property('status');
        chai.expect(response.status).to.equal("ok");
        chai.expect(response).to.have.property('data');
        chai.expect(response.data).to.have.property('row_count');
        chai.expect(response.data.row_count).to.equal(1);
        done();
      });
  });

  after(function (done) {
    done();
  });

});
