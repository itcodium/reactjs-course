import React from 'react';
import { useSelector } from 'react-redux'
import { BasicTable } from '../../../../components/index';
import {getAll, init, resetStatus } from '../reducers/user';

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
    const user = useSelector(state => state.admin.user)
    const helper = new UserHelper();
    
    function getData(){
        return <BasicTable
            helper={helper}
            action={{ get: getAll, resetStatus, init }}
            title="User List"
            payload={user}
            columns={columns}></BasicTable>
    }

    return getData();
}

export default User;