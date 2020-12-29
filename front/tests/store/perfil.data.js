module.exports = {
  perfil: [{
    "id_perfil": "",
    "perfil": "Test1",
    "vigencia_desde": "2019-01-01",
    "vigencia_hasta": "2019-01-01",
    "creado_por": "test1",
    "modificado_por": "test2",
  }],
  updated: false,
  getOneUpdate: function () {
    if (!this.updated) {
      this.perfil[0].perfil = this.perfil[0].perfil + "_UPDATED";
      this.perfil[0].vigencia_desde = "2020-02-02";
      this.perfil[0].vigencia_hasta = "2020-06-06";
      this.perfil[0].modificado_por = "UPDATED";
    }
    return this.perfil[0];
  }
};
