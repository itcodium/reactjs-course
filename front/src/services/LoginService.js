class LoginService {
    static loginIn = false;
    static setLogIn(value) {
        if (!value) {
            localStorage.setItem('user', null);
            window.location = "#/login"
        }
        this.loginIn = value
        return this.loginIn;

    }
    static isLoggedIn() {
        return this.loginIn;
    }
}
export default LoginService;

