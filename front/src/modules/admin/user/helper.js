import UserDelete from './userDelete'
import UserCreate from './userCreate';
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
        return <UserCreate model={model} handleClose={close}></UserCreate>
    }
    this.create = (close) => {
        return <UserCreate handleClose={close}></UserCreate>;
    }
}




