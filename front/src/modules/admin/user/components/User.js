import { getAccordionDetailsUtilityClass } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { BasicTable } from '../../../../components/index';
// import USER from '../../../redux/actions/user';

import UserHelper from './helper';
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
    // const error = useSelector(state => state.user.error);
    const fakeUSER = {};
    const helper = new UserHelper();
     console.log("Post new UserHelper()", helper.title());
    
    function getData(){
        
        return <BasicTable
            helper={helper}
            action={fakeUSER} //USER
            title="User"
            status={status}
            data={data || [] }
            columns={columns}></BasicTable>
    }

    return getData();
}

export default User;