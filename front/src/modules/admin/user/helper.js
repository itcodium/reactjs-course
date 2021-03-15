import UserDelete from './userDelete'
import UserCreate from './userCreate';
import UserUpdate from './userUpdate';
import { useDispatch } from 'react-redux'
export default function UserHelper() {

    let model = null;
    let action = null;
    const dispatch = useDispatch();

    this.setModel = (data) => {
        model = data;
    }
    this.setAction = (action) => {
        action = action;
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




