var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);

var Login = require('../helpers/Login.js');
var FileHelper = require('../helpers/Files.js');
var UserData = require('./user.data.js');
var PerfilData = require('./perfil.data.js');
var Hosts = require('../helpers/Hosts.js');

var apiUrl = Hosts.getUrl();

FileHelper.status.folderPath = __dirname + '/data';
FileHelper.status.credencialPath = __dirname + '/../credenciales.txt';
FileHelper.deleteFolderFiles();

Login.chai = chai;
Login.FileHelper = FileHelper;
Login.path = __dirname + '/token';


describe('Perfil', function () {

  it("Login", function (done) {
    Login.login(apiUrl, UserData.login, done);
  });

  it("Save perfil[0]", function (done) {
    chai.request(apiUrl)
      .post("/perfil")
      .send(PerfilData.perfil[0])
      .set('Authorization', 'Bearer ' + Login.token)
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/perfil_0.post.json', res.text);
        const response = JSON.parse(res.text);
        chai.expect(response).to.have.property('status');
        chai.expect(response).to.have.property('data');
        chai.expect(response.data).to.have.property('id');
        chai.expect(response.data).to.have.property('row_count');
        chai.expect(response.data.row_count).to.equal(1);
        PerfilData.perfil[0].id_perfil = response.data.id;
        done();
      });
  });

  it("Update perfil", function (done) {
    var perfil = PerfilData.getOneUpdate();
    chai.request(apiUrl)
      .put("/perfil/" + perfil.id_perfil)
      .send(perfil)
      .set('Authorization', 'Bearer ' + Login.token)
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/perfil.updated.id.' + perfil.id_perfil + '.json', res.text);
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
    var id = PerfilData.perfil[0].id_perfil;
    chai.request(apiUrl)
      .get("/perfil/" + id)
      .set('Authorization', 'Bearer ' + Login.token)
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/perfilById.' + id + '.json', res.text);
        const response = JSON.parse(res.text);
        chai.expect(response).to.have.property('status');
        chai.expect(response).to.have.property('data');
        chai.expect(response.status).to.equal("ok");
        done();
      });
  });

  it("List", function (done) {
    chai.request(apiUrl)
      .get("/perfil")
      .set('Authorization', 'Bearer ' + Login.token)
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/perfil.json', res.text);
        const response = JSON.parse(res.text);
        chai.expect(response).to.have.property('status');
        chai.expect(response).to.have.property('data');
        chai.expect(response.data).to.be.an('array');
        chai.expect(response.status).to.equal("ok");
        done();
      });
  });

  it("Delete By Id", function (done) {
    var id = PerfilData.perfil[0].id_perfil;
    chai.request(apiUrl)
      .delete("/perfil/" + id)
      .set('Authorization', 'Bearer ' + Login.token)
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/perfil.delete.id.' + id + '.json', res.text);
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
