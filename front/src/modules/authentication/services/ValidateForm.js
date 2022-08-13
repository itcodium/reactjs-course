import isEmail from 'validator/lib/isEmail';
import isMobilePhone from 'validator/lib/isMobilePhone';


class ValidateForm {
    static hasError(form) {
        return !!Object.keys(form).find(key => {
            return form[key].valid !== true && form[key].required !== false;
        })
    }
    static getField(field) {
        field.invalid = !field.valid;
        return field;
    }
    static validate = (e) => {
        const { value, required, type } = e.target;
        let field = {
            value: value,
            valid: true
        };
        if (required && !value) {
            field.message = "El valor es requerido";
            field.valid = false;
            return this.getField(field);
        }
        if ((required && value) || (!required && value)) {
            if (type === "email" && !isEmail(value)) {
                field.message = "Email no valido";
                field.valid = false;
                return this.getField(field);
            }
            if (type === "tel" && !isMobilePhone(value)) {
                field.message = "El numero es invalido no valido";
                field.valid = false;
                return this.getField(field);
            }
        }
        return this.getField(field);
    }
    static handleChange = (e) => {
        const { id } = e.target;
        this.setForm(prevState => ({
            ...prevState,
            [id]: this.validate(e),
        }))
    }
}
export default ValidateForm;
