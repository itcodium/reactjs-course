module.exports = {
    login: { user_name: "admin", password: "123123" },
    loginNotAllowed: { user_name: "client", password: "123123" },
    token: "",
    module: {
        "id_modulo": null,
        "modulo": "Client_TEST",
        "codigo": "CLIENT_TEST",
        "vigencia_desde": "2020-01-01",
        "vigencia_hasta": "2030-12-31",
        "creado_por": "test.module"
    },
    perfil: {
        "id_perfil": "",
        "perfil": "Client_TEST",
        "vigencia_desde": "2020-01-01",
        "vigencia_hasta": "2030-12-31",
        "creado_por": "test.module",
        "modificado_por": null,
    },
    perfil_module: {
        "id_perfil_modulo": null,
        "id_perfil": null,
        "id_modulo": null,
        "enabled": 1,
        "creado_por": "test.module",
    },
    user: {
        "id_usuario": "",
        "usuario": "test",
        "nombre": "Test",
        "apellido": "Test",
        "password": "123123",
        "email": "test@test.com",
        "id_perfil": null,
        "vigencia_desde": "2020-01-01",
        "vigencia_hasta": "2030-12-31",
        "creado_por": "test.module"
    },
};
