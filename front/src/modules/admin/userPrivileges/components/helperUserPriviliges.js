import UserPrivilegesEdit from './UserPrivilegesEdit'
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
export default function UserPrivilegesHelper() {
    let model = null;
    this.setModel = (data) => {
        model = data;
    }
    this.title = () => {
        return "User privileges Edition.";
    }
    this.delete = () => { return false; }
    this.update = () => { return false; }
    this.create = () => { return false; }
    this.update = (close) => {
        return  <UserPrivilegesEdit  model={model} handleClose={close}></UserPrivilegesEdit>
    }

}




