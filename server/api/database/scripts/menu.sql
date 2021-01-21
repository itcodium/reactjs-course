use u159062377_react;
/**/
truncate table hr_menu;
truncate table hr_menu_perfil;
truncate table hr_menu_text;

select * from hr_menu;
select * from hr_menu_perfil;
select * from hr_menu_text;
 

CALL `u159062377_react`.`menu_getNodesDepth`('ES');

-- FIELDS: lang,name,url,icon,action

-- TEST Caso 1
CALL `u159062377_react`.`menu_addNodeSameLevel`(0, 'es', 'Tienda','','','');
CALL `u159062377_react`.`menu_addNodeChild`(1,'ES', 'Productos','/','','');

CALL `u159062377_react`.`menu_addNodeSameLevel`(1, 'es', 'User','','login','');
CALL `u159062377_react`.`menu_addNodeChild`(3,'ES', 'Logout','','','logout');
CALL `u159062377_react`.`menu_addNodeSameLevel`(1, 'es', 'Contacto','/Contact','',''); 

/*
CALL `u159062377_react`.`menu_List`('ES');
CALL `u159062377_react`.`menu_getFullTree`(1, 'ES');
CALL `u159062377_react`.`menu_getAll`('ES');
CALL `u159062377_react`.`menu_getAllLeafNodes`('ES');
CALL `u159062377_react`.`menu_getFullTree`(5, 'ES');
CALL `u159062377_react`.`menu_getSinglePath`(0, 'EN');
*/
CALL `u159062377_react`.`usuarioGetAll`();
CALL `u159062377_react`.`perfilmoduleGetByModuloUsuario`();
