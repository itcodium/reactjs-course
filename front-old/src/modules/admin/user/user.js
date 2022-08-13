import { useSelector } from 'react-redux'
import BasicTable from '../../../app/BasicTable/basicTable';
import USER from '../../../redux/actions/user';
import Typography from '@material-ui/core/Typography';

import LanguageSelector from '../../../app/LanguageSelector/LanguageSelector';
import UserHelper from './helper';
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
        { title: 'Edit', visible: true, type: 'edit', buttons: { delete: true, edit: true } },
    ];
    const status = useSelector(state => state.user.status)
    const data = useSelector(state => state.user.list)
    console.log('data: ', data);
    const error = useSelector(state => state.user.error);

    const helper = new UserHelper();
    return (
        <BasicTable
            helper={helper}
            action={USER}
            title="User"
            status={status}
            data={data}
            columns={columns}></BasicTable>

    );
}

export default User;


