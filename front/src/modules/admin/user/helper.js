import UserDelete from './userDelete'
import UserCreate from './userCreate';
import UserUpdate from './userUpdate';
export default function UserHelper() {
    let model = null;
    this.setModel = (data) => {
        model = data;
    }
    this.deleteTitle = () => {
        return "Modal delete";
    }
    this.title = () => {
        return model ? "Update User" : "Create User";
    }
    this.delete = (close) => {
        return <UserDelete model={model} handleClose={close}></UserDelete>
    }
    this.update = (close) => {
        return <UserUpdate model={model} handleClose={close}></UserUpdate>
    }
    this.create = (close) => {
        return <UserCreate handleClose={close}></UserCreate>;
    }
}




