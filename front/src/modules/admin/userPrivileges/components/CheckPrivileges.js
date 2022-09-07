import { useDispatch  } from 'react-redux';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { changeUserPrivilege } from '../reducers/userPrivileges';

function CheckPrivileges({ user, menu }) {
    const dispatch = useDispatch();
    
    const handleChange = (event) => {
        dispatch(changeUserPrivilege({
            id_usuario: user.id_usuario,
            id_menu: event.target.value,
            checked: event.target.checked
        }));
    }

    return <FormControlLabel
        control={
            <Checkbox
                key={menu.id_menu}
                checked={menu.enabled ? true : false}
                onChange={(e) => {
                    handleChange(e);
                }}
                color="primary"
                value={menu.id_menu}
            />
        }
        label={menu.title}
    />

}

export default CheckPrivileges;


