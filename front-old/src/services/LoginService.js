class LoginService {
    static loginIn = false;
    static setLogIn(value) {
        this.loginIn = value
        if (!value) {
            console.log('LoginService OUT: ', value);
            localStorage.removeItem('user');
            // window.location = "#/login"
        }
        return this.loginIn;
    }
    static isLoggedIn() {
        return this.loginIn;
    }
}
export default LoginService;

