import UserPrivilegesEdit from './UserPrivilegesEdit'
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
export default function UserPrivilegesHelper() {
    let model = null;
    this.setModel = (data) => {
        console.log("+++ data", data)
        model = data;
    }
    this.title = () => {
        return "User privileges Edition.";
    }
    this.delete = () => { return false; }
    this.update = () => { return false; }
    this.create = () => { return false; }
    this.update = (close) => {
        console.log(" + UPDATE + ", model)
        return  <UserPrivilegesEdit model={model}></UserPrivilegesEdit>
        /*
        hideEdition, hideTitle, privileges, user

        <Menu 
        
        
        >
    </Menu>
        
        <>
        <p>MENU DO {model?.id_usuario} </p>
            <Menu 
                title={this.title()} 
                user={model} 
                privileges={true} 
                hideTitle={true} 
                hideEdition={true} 
                handleClose={close}>
            </Menu>
            <p>MENU - {this.title()}</p>
            <DialogActions>
                <Button onClick={close} color="primary">Aceptar</Button>
            </DialogActions>
        </>*/
    }

}




