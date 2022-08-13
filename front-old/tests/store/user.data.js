module.exports = {
  login: { email: "p.haddad.p@gmail.com", password: "123123" },
  login_not_valid: { email: "admin_", password: "123WW123", lang: "ES" },
  expired_token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1NzM5Mjc3OTQsImV4cCI6MTU3MzkyODM5NCwiaXNzIjoiZXhhbXBsZS5vcmciLCJhdWQiOiJiYzM1NmYwMTViNGM1OTBjMGQxZTY1YzU3ZGVlZGQwYTlhYzUyNjQzIiwiZGF0YSI6eyJpZF91c3VhcmlvIjoyLCJ1dWlkIjoiYTIyM2UzMjItMzY1Ny0xMWU2LWE0OWItYzA0YTAwMDExOTAyIiwiZXhwaXJhdGlvbiI6IjIwNTAtMDEtMDEgMDA6MDA6MDAiLCJ1c3VhcmlvIjoiYWRtaW4iLCJub21icmUiOiJBZG1pbmlzdHJhZG9yIiwiYXBlbGxpZG8iOiJTaXN0ZW1hIiwiZW1haWwiOiJwLmhhZGRhZC5wQGdtYWlsLmNvbSIsImxhbmciOiJFUyIsImlkX3BlcmZpbCI6MX19.LC5g2lPWgmsr-Yc8fLfam2_p9OVBykUf6deQ1Ojk1jbLhW_BP3XVPx4WAeBeIQ3zrInXBFs4KQXSlKpePzV1XKdrStlS6DU3S6WoVVGstbl7x0dRp-8Us9vR3t4wIevdry2farL5e72wsB3Gy2bXyTRDFvGVsm7B1Tq20lUabYnQ9oMQnLs1LY3E-GLl1OK23ADm1pvnxwihSNd8ki4WQyIWvJBpOHQv5POODGFTFTVP0t3Ef-CZpO7SZ5h8NUd2ktVXtkg0EUrSC3gF2LQ4a4ytXOo5ie5TuUJv0bXgsECfO5E2Z18TcRNvjO4lcK6I4AYy3mYnfl91kOXf64aUMUa7qIVkI8rIinFPXbmajT1b9ZTBESCwa_zIJpDbIX96wJYOuRn7BUiPFWoZzGdlVHkWV4Jb_ur7GqnKBTXbe-PPCdgcoWmPDkgh4N5EGvcXmqeuHqw_QBBQUeouUAEmE4WHJRuTvaNoCqaaY4AjeWz71uwN831wMdQ5z37lqfY4vkVhG_BxF57Dt55jt6B1AXSUGkkDJNdhnVqPiPUMLB4dZUFkt7yLZipcXYmpaZ3FsZctluzV2uQvyIQJseZ3_veHBaHJEUgvw20Z5JLK3qQmDpT_fm1YON4AfXmmtH9aSEgkfW2jz0IyFODPE_bvSvuJtxizbc_5AT6NOwthxhA",
  user: [{
    "id_usuario": "",
    "usuario": "test_user_name",
    "nombre": "Test 0001",
    "apellido": "Test 0001",
    "password": "123123",
    "email": "test@test.com",
    "id_perfil": 1,
    "vigencia_desde": "2019-01-01",
    "vigencia_hasta": "2019-01-01",
    "creado_por": "TEST_0001"
  }],
  updated: false,
  getUserOneUpdate: function () {
    if (!this.updated) {
      this.user[0].usuario = this.user[0].usuario + "_UPDATED";
      this.user[0].nombre = this.user[0].nombre + "_UPDATED";
      this.user[0].apellido = this.user[0].apellido + "_UPDATED";
      this.user[0].email = "test_updated@test.com";
      this.user[0].id_perfil = 22;
      this.user[0].lang = "us";
      this.user[0].vigencia_desde = "2016-01-01";;
      this.user[0].vigencia_hasta = "2017-12-31";
      this.user[0].modificado_por = "Modif User";
    }
    return this.user[0];
  }
};
