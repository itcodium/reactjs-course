import UserDelete from './userDelete'
import UserCreate from './userCreate';
import { useDispatch } from 'react-redux'
import USER from '../../../redux/actions/user';
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
    this.onDelete = (res) => {
        alert("Delete ok!")
        // dispatch(USER.remove(model));
    }
    this.title = () => {
        return model.id_usuario ? "Update User" : "Create User";
    }
    this.delete = () => {
        return <UserDelete model={model}></UserDelete>
    }
    this.update = () => {
        return <UserCreate model={model}></UserCreate>
    }
    this.create = () => {
        return <UserCreate model={model}></UserCreate>
    }
}




