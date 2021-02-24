import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import BasicTable from '../../app/Crud/Table/basicTable';
import USER from '../../redux/actions/user';
import Typography from '@material-ui/core/Typography';

function User(props) {
    const columns = [
        { field: 'id_usuario', title: 'Id', align: "left", visible: true },
        { field: 'usuario', title: 'User', align: "left", visible: true },
        { field: 'nombre', title: 'Name', align: "left", visible: true },
        { field: 'apellido', title: 'Last Name', align: "left", visible: true },
        { field: 'email', title: 'Email', align: "left", visible: true },
        { field: 'vigencia_desde', title: 'From', align: "center", visible: true },
        { field: 'vigencia_hasta', title: 'To', align: "center", visible: true },
        { field: 'creado_por', title: 'Created By', align: "center", visible: false },
        { title: 'Edit', visible: true, type: 'edit' },
    ];
    const status = useSelector(state => state.user.status)
    const users = useSelector(state => state.user.users)
    return (
        <div>
            <Typography variant="h4" gutterBottom>User</Typography>
            <BasicTable action={USER} status={status} data={users} columns={columns}></BasicTable>
        </div>
    );
}

export default User;


