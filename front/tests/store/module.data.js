module.exports = {
  module: [{
    "id_modulo": "",
    "modulo": "Test1",
    "codigo": "TEST",
    "vigencia_desde": "2019-01-01",
    "vigencia_hasta": "2019-01-01",
    "creado_por": "test1",
    "modificado_por": "test2",
  }],
  updated: false,
  getOneUpdate: function () {
    if (!this.updated) {
      this.module[0].modulo = this.module[0].modulo + "_UPDATED";
      this.module[0].codigo = this.module[0].codigo + "_UPDATED";
      this.module[0].vigencia_desde = "2020-02-02";
      this.module[0].vigencia_hasta = "2020-06-06";
      this.module[0].modificado_por = "UPDATED";
    }
    return this.module[0];
  }
};
