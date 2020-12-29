module.exports = {
  perfil_module: [{
    "id_perfil": "1",  // Administrador
    "id_modulo": "32", // ingles
    "enabled": 1,
    "creado_por": "test1",
  }],
  paramModuleUser: {
    modulo: "Menu",
    id_usuario: 2
  },
  updated: false,
  getOneUpdate: function () {
    if (!this.updated) {
      this.perfil_module[0].id_modulo = 32; // ingles
      this.perfil_module[0].enabled = 0;
      this.perfil_module[0].vigencia_desde = "2040-01-01 00:00:00";
      this.perfil_module[0].vigencia_hasta = "2049-12-31 23:59:59";
      this.perfil_module[0].modificado_por = "UPDATED";
    }
    return this.perfil_module[0];
  }
};
