import { useSelector } from 'react-redux'
import BasicTable from '../../app/BasicTable/basicTable';
import PERFIL from '../../redux/actions/perfil';
import Typography from '@material-ui/core/Typography';

function Perfil(props) {

    const columns = [
        { field: 'id_perfil', title: 'Id', align: "left", visible: true },
        { field: 'perfil', title: 'Perfil', align: "left", visible: true },
        { field: 'codigo', title: 'Code', align: "left", visible: true },
        { field: 'vigencia_desde', title: 'From', align: "center", visible: true },
        { field: 'vigencia_hasta', title: 'To', align: "center", visible: true },
        { field: 'creado_por', title: 'Created By', align: "center", visible: false },
        { field: 'modificado_por', title: 'Modify By', align: "center", visible: false },
        { title: 'Edit', visible: true, type: 'edit' },
    ];

    const status = useSelector(state => state.perfil.status)
    const list = useSelector(state => state.perfil.perfil)

    return (
        <div>
            <Typography variant="h4" gutterBottom>Perfil</Typography>
            <BasicTable action={PERFIL} status={status} data={list} columns={columns}></BasicTable>
        </div>
    );
}

export default Perfil;