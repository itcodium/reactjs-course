module.exports = {
  client: [{
    "id_cliente": "",
    "nombre": "Test 0001",
    "codigo": "TEST_0001",
    "habilitado": true,
    "creado_por": "test1"
  }, {
    "id_cliente": "",
    "nombre": "Test 0002",
    "codigo": "TEST_0002",
    "habilitado": false,
    "creado_por": "test2"
  }],
  updated: false,
  getClientOneUpdate: function () {
    if (!this.updated) {
      this.client[0].nombre = this.client[0].nombre + "_UPDATED";
      this.client[0].codigo = this.client[0].codigo + "_UPDATED";
      this.client[0].habilitado = !this.client[0].habilitado;
      this.client[0].modificado_por = "UPDATED";
    }
    return this.client[0];
  }
};
