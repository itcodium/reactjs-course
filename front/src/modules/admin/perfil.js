import Typography from '@material-ui/core/Typography';
import BasicTable from '../../app/Crud/Table/basicTable';

function Perfil(props) {
    const columns = [
        { field: 'name', title: 'Nombre', align: "left", visible: true },
        { field: 'calories', align: "center", title: 'Ubicacion', visible: true },
        { field: 'fat', title: 'Fat', align: "center", visible: true },
        { field: 'carbs', title: 'Carbs', align: "center", visible: true },
        { field: 'protein', title: 'Protein', align: "center", visible: true },
        { field: 'fake', title: 'HIDDEN', align: "center", visible: false },
        { title: 'Edit', visible: true, type: 'edit' },
    ];
    const data = [
        { "name": "Frozen yoghurt", "calories": 159, "fat": 6.0, "carbs": 24, "protein": 4.0, "fake": "-" },
        { "name": "Ice cream sandwich", "calories": 237, "fat": 9.0, "carbs": 37, "protein": 4.3, "fake": "-" },
        { "name": "Eclair", "calories": 262, "fat": 16.0, "carbs": 24, "protein": 6.0, "fake": "-" },
        { "name": "Cupcake", "calories": 305, "fat": 3.7, "carbs": 67, "protein": 4.3, "fake": "-" },
        { "name": "Gingerbread", "calories": 356, "fat": 16.0, "carbs": 49, "protein": 3.9, "fake": "-" },
    ]
    return (
        <div>
            <Typography variant="h4" gutterBottom>Perfil</Typography>
            <BasicTable data={data} columns={columns}></BasicTable>
        </div>
    );
}

export default Perfil;