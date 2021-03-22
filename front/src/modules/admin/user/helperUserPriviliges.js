import Menu from '../menu/menu'
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
export default function UserPrivilegesHelper() {
    let model = null;
    this.setModel = (data) => {
        model = data;
    }
    this.title = () => {
        return "User privileges Edition";
    }
    this.delete = () => { return false; }
    this.update = () => { return false; }
    this.create = () => { return false; }
    this.update = (close) => {
        return <div>
            <Menu title={this.title} user={model} privileges={true} hideTitle={true} hideEdition={true} handleClose={close}></Menu>
            <DialogActions>
                <Button onClick={close} color="primary">
                    Aceptar</Button>
            </DialogActions>
        </div>
    }

}




