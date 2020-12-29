var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);

var Login = require('../helpers/Login.js');
var FileHelper = require('../helpers/Files.js');
var ModuleData = require('./new.module.data.js');
var Hosts = require('../helpers/Hosts.js');

var apiUrl = Hosts.getUrl();

FileHelper.status.folderPath = __dirname + '/data';
FileHelper.deleteFolderFiles();

Login.chai = chai;
Login.FileHelper = FileHelper;
Login.path = __dirname + '/token';

console.log('ModuleData.login: ', ModuleData.login);

describe('user', function () {
    it("Login", function (done) {
        chai.request(apiUrl)
            .post("/login")
            .send(ModuleData.login)
            .end(function (err, res) {
                FileHelper.saveToFile(__dirname + '/data/user_login.json', res.text);
                const response = JSON.parse(res.text);
                chai.expect(response).to.have.property('status');
                chai.expect(response).to.have.property('data');
                chai.expect(response.data).to.have.property('user');
                chai.expect(response.data).to.have.property('token');
                ModuleData.token = response.data.token;
                done();
            });
    });

    it("Module Allow Get All", function (done) {
        chai.request(apiUrl)
            .get("/module")
            .send(ModuleData.module)
            .set('Authorization', 'Bearer ' + ModuleData.token)
            .end(function (err, res) {
                FileHelper.saveToFile(__dirname + '/data/module.allow.getAll.json', res.text);
                done();
            });
    });

    it("Login Not Allowed", function (done) {
        chai.request(apiUrl)
            .post("/login")
            .send(ModuleData.loginNotAllowed)
            .end(function (err, res) {
                FileHelper.saveToFile(__dirname + '/data/user_login.json', res.text);
                const response = JSON.parse(res.text);
                chai.expect(response).to.have.property('status');
                chai.expect(response).to.have.property('data');
                chai.expect(response.data).to.have.property('user');
                chai.expect(response.data).to.have.property('token');
                ModuleData.token = response.data.token;
                done();
            });
    });

    it("Module [* Not] Allow Get All", function (done) {
        chai.request(apiUrl)
            .get("/module")
            .send(ModuleData.module)
            .set('Authorization', 'Bearer ' + ModuleData.token)
            .end(function (err, res) {
                FileHelper.saveToFile(__dirname + '/data/new_module.not.getAll.json', res.text);
                done();
            });
    });


    it("Save module", function (done) {
        chai.request(apiUrl)
            .post("/module")
            .send(ModuleData.module)
            .set('Authorization', 'Bearer ' + ModuleData.token)
            .end(function (err, res) {
                FileHelper.saveToFile(__dirname + '/data/new_module_0.post.json', res.text);
                const response = JSON.parse(res.text);
                chai.expect(response).to.have.property('status');
                chai.expect(response).to.have.property('data');
                chai.expect(response.data).to.have.property('id');
                chai.expect(response.data).to.have.property('row_count');
                chai.expect(response.data.row_count).to.equal(1);
                ModuleData.module.id_modulo = response.data.id;
                ModuleData.perfil_module.id_modulo = response.data.id;
                done();
            });
    });

    it("Save perfil", function (done) {
        chai.request(apiUrl)
            .post("/perfil")
            .send(ModuleData.perfil)
            .set('Authorization', 'Bearer ' + ModuleData.token)
            .end(function (err, res) {
                FileHelper.saveToFile(__dirname + '/data/new_perfil_0.post.json', res.text);
                const response = JSON.parse(res.text);
                chai.expect(response).to.have.property('status');
                chai.expect(response).to.have.property('data');
                chai.expect(response.data).to.have.property('id');
                chai.expect(response.data).to.have.property('row_count');
                chai.expect(response.data.row_count).to.equal(1);
                ModuleData.perfil.id_perfil = response.data.id;
                ModuleData.user.id_perfil = response.data.id;
                ModuleData.perfil_module.id_perfil = response.data.id;
                done();
            });
    });

    it("Save perfil-Module", function (done) {
        chai.request(apiUrl)
            .post("/perfilmodule")
            .send(ModuleData.perfil_module)
            .set('Authorization', 'Bearer ' + ModuleData.token)
            .end(function (err, res) {
                FileHelper.saveToFile(__dirname + '/data/new_perfilmodule_0.post.json', res.text);
                const response = JSON.parse(res.text);
                chai.expect(response).to.have.property('status');
                chai.expect(response).to.have.property('data');
                chai.expect(response.data).to.have.property('id');
                chai.expect(response.data).to.have.property('row_count');
                chai.expect(response.data.row_count).to.equal(1);
                ModuleData.perfil_module.id_perfil_modulo = response.data.id;
                done();
            });
    });

    it("Save user", function (done) {
        chai.request(apiUrl)
            .post("/user")
            .send(ModuleData.user)
            .set('Authorization', 'Bearer ' + ModuleData.token)
            .end(function (err, res) {
                FileHelper.saveToFile(__dirname + '/data/new_user_0.post.json', res.text);
                const response = JSON.parse(res.text);
                chai.expect(response).to.have.property('status');
                chai.expect(response).to.have.property('data');
                chai.expect(response.data).to.have.property('id');
                chai.expect(response.data).to.have.property('row_count');
                chai.expect(response.data.row_count).to.equal(1);
                ModuleData.user.id_user = response.data.id;
                done();
            });
    });

    it("Delete User By Id", function (done) {
        var id = ModuleData.user.id_user;
        chai.request(apiUrl)
            .delete("/user/" + id)
            .set('Authorization', 'Bearer ' + ModuleData.token)
            .end(function (err, res) {
                FileHelper.saveToFile(__dirname + '/data/user.delete.id.' + id + '.json', res.text);
                const response = JSON.parse(res.text);
                chai.expect(response).to.have.property('status');
                chai.expect(response.status).to.equal("ok");
                chai.expect(response).to.have.property('data');
                chai.expect(response.data).to.have.property('row_count');
                chai.expect(response.data.row_count).to.equal(1);
                done();
            });
    });

    it("perfilmodule Delete By Id", function (done) {
        var id = ModuleData.perfil_module.id_perfil_modulo;
        chai.request(apiUrl)
            .delete("/perfilmodule/" + id)
            .set('Authorization', 'Bearer ' + ModuleData.token)
            .end(function (err, res) {
                FileHelper.saveToFile(__dirname + '/data/new_perfilmodule.delete.id.' + id + '.json', res.text);
                const response = JSON.parse(res.text);
                chai.expect(response).to.have.property('status');
                chai.expect(response.status).to.equal("ok");
                chai.expect(response).to.have.property('data');
                chai.expect(response.data).to.have.property('row_count');
                chai.expect(response.data.row_count).to.equal(1);
                done();
            });
    });

    it("Delete Perfil By Id", function (done) {
        var id = ModuleData.perfil.id_perfil;
        chai.request(apiUrl)
            .delete("/perfil/" + id)
            .set('Authorization', 'Bearer ' + ModuleData.token)
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

    it("Delete Module By Id", function (done) {
        var id = ModuleData.module.id_modulo;
        chai.request(apiUrl)
            .delete("/module/" + id)
            .set('Authorization', 'Bearer ' + ModuleData.token)
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