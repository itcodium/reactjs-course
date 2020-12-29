var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);

var Login = require('../helpers/Login.js');
var FileHelper = require('../helpers/Files.js');
var UserData = require('./user.data.js');
var PerfilModuleData = require('./perfil.module.data.js');
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
      .post("/perfilmodule")
      .send(PerfilModuleData.perfil_module[0])
      .set('Authorization', 'Bearer ' + Login.token)
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/perfilmodule_0.post.json', res.text);
        const response = JSON.parse(res.text);
        chai.expect(response).to.have.property('status');
        chai.expect(response).to.have.property('data');
        chai.expect(response.data).to.have.property('id');
        chai.expect(response.data).to.have.property('row_count');
        chai.expect(response.data.row_count).to.equal(1);
        PerfilModuleData.perfil_module[0].id_perfil_modulo = response.data.id;
        done();
      });
  });

  it("Update perfilModulo", function (done) {
    var perfilModulo = PerfilModuleData.getOneUpdate();
    chai.request(apiUrl)
      .put("/perfilmodule/" + perfilModulo.id_perfil_modulo)
      .send(perfilModulo)
      .set('Authorization', 'Bearer ' + Login.token)
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/perfilmodule.updated.id.' + perfilModulo.id_perfil_modulo + '.json', res.text);
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
    var id = PerfilModuleData.perfil_module[0].id_perfil_modulo;
    chai.request(apiUrl)
      .get("/perfilmodule/" + id)
      .set('Authorization', 'Bearer ' + Login.token)
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/perfilmoduleById.' + id + '.json', res.text);
        const response = JSON.parse(res.text);
        chai.expect(response).to.have.property('status');
        chai.expect(response).to.have.property('data');
        chai.expect(response.status).to.equal("ok");
        done();
      });
  });

  it("List By Id Perfil", function (done) {
    var id = PerfilModuleData.perfil_module[0].id_perfil;
    chai.request(apiUrl)
      .get("/perfilmodule/perfil/" + id)
      .set('Authorization', 'Bearer ' + Login.token)
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/perfilmoduleByIdPerfil.' + id + '.json', res.text);
        const response = JSON.parse(res.text);
        chai.expect(response).to.have.property('status');
        chai.expect(response).to.have.property('data');
        chai.expect(response.status).to.equal("ok");
        done();
      });
  });


  it("List Module By IdUser", function (done) {
    chai.request(apiUrl)
      .get("/perfilmodule/module")
      .query(PerfilModuleData.paramModuleUser)
      .set('Authorization', 'Bearer ' + Login.token)
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/moduleByIdUser.json', res.text);
        const response = JSON.parse(res.text);
        chai.expect(response).to.have.property('status');
        chai.expect(response).to.have.property('data');
        chai.expect(response.status).to.equal("ok");
        done();
      });
  });


  it("List", function (done) {
    chai.request(apiUrl)
      .get("/perfilmodule")
      .set('Authorization', 'Bearer ' + Login.token)
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/perfilmodule.json', res.text);
        const response = JSON.parse(res.text);
        chai.expect(response).to.have.property('status');
        chai.expect(response).to.have.property('data');
        chai.expect(response.data).to.be.an('array');
        chai.expect(response.status).to.equal("ok");
        done();
      });
  });

  it("Delete By Id", function (done) {
    var id = PerfilModuleData.perfil_module[0].id_perfil_modulo;
    chai.request(apiUrl)
      .delete("/perfilmodule/" + id)
      .set('Authorization', 'Bearer ' + Login.token)
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/perfilmodule.delete.id.' + id + '.json', res.text);
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
