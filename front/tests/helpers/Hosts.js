


module.exports = {
  dev: "http://localhost:5000/api",
  production: "http://itcodium.tech/api",
  getUrl: function () {
    console.log('process.env.NODE_ENV: ', process.env.NODE_ENV);
    return this[process.env.NODE_ENV];

  }
};
