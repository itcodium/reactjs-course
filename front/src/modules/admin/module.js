import { useSelector } from 'react-redux'
import BasicTable from '../../app/BasicTable/basicTable';
import MODULE from '../../redux/actions/modules';
import Typography from '@material-ui/core/Typography';

function Module(props) {

    const columns = [
        { field: 'id_modulo', title: 'Id', align: "left", visible: true },
        { field: 'modulo', title: 'Module', align: "left", visible: true },
        { field: 'codigo', title: 'Code', align: "left", visible: true },
        { field: 'vigencia_desde', title: 'From', align: "center", visible: true },
        { field: 'vigencia_hasta', title: 'To', align: "center", visible: true },
        { field: 'creado_por', title: 'Created By', align: "center", visible: false },
        { title: 'Edit', visible: true, type: 'edit' },
    ];
    const status = useSelector(state => state.productDetail.status)
    const modules = useSelector(state => state.modules.modules)

    return (
        <div>
            <Typography variant="h4" gutterBottom>Module</Typography>
            <BasicTable action={MODULE} status={status} data={modules} columns={columns}></BasicTable>
        </div>
    );
}

export default Module;