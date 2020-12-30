import isEmail from 'validator/lib/isEmail';

class ValidateForm {
    static hasError(form) {
        return Object.keys(form).find(key => {
            return form[key].error === true
        })
    }
    static handleChange = (e) => {
        const { id, value, required, type } = e.target;
        let field = {
            value: value
        };
        if (required && !value) {
            field.message = "El valor es requerido";
            field.error = true;
        }
        if (value) {
            if (type === "email" && !isEmail(value)) {
                field.message = "Email no valido";
                field.error = true;
            }
        }
        this.setForm(prevState => ({
            ...prevState,
            [id]: field,
        }))
    }
}
export default ValidateForm;

