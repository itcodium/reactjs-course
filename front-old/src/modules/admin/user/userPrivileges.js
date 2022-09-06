import { useSelector } from 'react-redux'
import BasicTable from '../../../app/BasicTable/basicTable';
import USER from '../../../redux/actions/user';

import UserPrivilegesHelper from './helperUserPriviliges';
function User() {
    const columns = [
        { field: 'id_usuario', title: 'Id', align: "left", visible: true },
        { field: 'usuario', title: 'User', align: "left", visible: true },
        { field: 'nombre', title: 'Name', align: "left", visible: true },
        { field: 'apellido', title: 'Last Name', align: "left", visible: true },
        { field: 'email', title: 'Email', align: "left", visible: true },
        { field: 'vigencia_desde', title: 'From', align: "center", visible: true },
        { field: 'vigencia_hasta', title: 'To', align: "center", visible: true },
        { field: 'creado_por', title: 'Created By', align: "center", visible: false },
        { title: 'Edit', visible: true, type: 'edit', buttons: { delete: true, edit: true } },
    ];
    const status = useSelector(state => state.user.status)
    const data = useSelector(state => state.user.list)
    const error = useSelector(state => state.user.error);

    const helper = new UserPrivilegesHelper();
    return (

        <BasicTable
            helper={helper}
            action={USER}
            title="User Privileges"
            status={status}
            data={data}
            columns={columns}></BasicTable>);
}

export default User;


