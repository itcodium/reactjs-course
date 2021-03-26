-- truncate table hr_menu;
-- truncate table hr_menu_perfil;
-- truncate table hr_menu_text;

select a.*,b.menu_text 
from hr_menu as a
	inner join hr_menu_text b
	on a.id_menu=b.id_menu;

select * from hr_menu_usuario where id_usuario=2 order by id_menu;
select * from hr_menu_text;

CALL `u159062377_react`.`menu_addNodeSameLevel`(0, 'es', 'Tienda','','','');
CALL `u159062377_react`.`menu_addNodeChild`(1,'ES', 'Productos','/','','');

CALL `u159062377_react`.`menu_addNodeSameLevel`(1, 'es', 'User','','login','');
CALL `u159062377_react`.`menu_addNodeChild`(3,'ES', 'Logout','','','logout');
CALL `u159062377_react`.`menu_addNodeSameLevel`(1, 'es', 'Contacto','/contact','',''); 

CALL `u159062377_react`.`menu_addNodeSameLevel`(1, 'es', 'Admin','/admin','','');
CALL `u159062377_react`.`menu_addNodeChild`(6,'ES', 'Perfil-Module','/perfilModule','','');
CALL `u159062377_react`.`menu_addNodeChild`(6,'ES', 'Perfil','/perfil','','');
CALL `u159062377_react`.`menu_addNodeChild`(6,'ES', 'Module','/module','','');
CALL `u159062377_react`.`menu_addNodeChild`(6,'ES', 'User','/user','','');
CALL `u159062377_react`.`menu_addNodeChild`(6,'ES', 'User Privileges','/userPrivileges','','');
CALL `u159062377_react`.`menu_addNodeChild`(6,'ES', 'Menu','/menu','','');


CALL `u159062377_react`.`menu_getNodesDepth`('ES');
CALL `u159062377_react`.`menu_getNodesDepthByUser`('ES',85);
CALL `menu_getNodesDepthByUserUrl`(25, '/user');

CALL `u159062377_react`.`menu_deleteNode`(46);
CALL `u159062377_react`.`menu_getAll`('ES');
/*
CALL `u159062377_react`.`menu_List`('ES');
CALL `u159062377_react`.`menu_getFullTree`(1, 'ES');
CALL `u159062377_react`.`menu_getAll`('ES');
CALL `u159062377_react`.`menu_getAllLeafNodes`('ES');
CALL `u159062377_react`.`menu_getFullTree`(5, 'ES');
CALL `u159062377_react`.`menu_getSinglePath`(0, 'EN');
*/

-- Perfiles
-- id_usuario=2', usuario=p.haddad.p@gmail.com, id_perfil=1 (administrador)

CALL `u159062377_react`.`usuarioGetAll`();
CALL `u159062377_react`.`perfilGetAll`(); -- Lista todos los tipos de perfiles
CALL `u159062377_react`.`moduleGetAll`();
CALL `u159062377_react`.`perfilmoduleGetByUsuario`(2);
 
        
        