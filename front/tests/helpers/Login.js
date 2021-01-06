


module.exports = {
  chai: null,
  token: null,
  FileHelper: null,
  path: null,
  login: function (url, username_pass, done) {
    var _this = this;
    this.chai.request(url)
      .post('/login')
      .set('Content-type', 'application/json;charset=utf-8')
      .set('Authorization', '')
      .send(username_pass)
      .end(function (err, res) {
        _this.FileHelper.saveToFile(_this.path + '/token_' + Date.now() + '.json', JSON.stringify(_this.token));
        const response = JSON.parse(res.text);
        _this.chai.expect(response).to.have.property('status');
        _this.chai.expect(response).to.have.property('data');
        _this.chai.expect(response.data).to.have.property('user');
        _this.chai.expect(response.data).to.have.property('token');
        _this.token = "Bearer " + response.data.token;
        done();
      });
  },
  logout: function (url, done) {
    var _this = this;
    _this.chai.request(url)
      .post('/services/auth/logout')
      .set('Content-type', 'application/json;charset=utf-8')
      .set('Authorization', _this.token)
      .end(function (err, res) {
        _this.chai.expect(response.status).to.equal(0);
        done();
      });
  }
};
