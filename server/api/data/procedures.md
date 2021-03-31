# USUARIO 
----------------------------------------------------------------------------------------
/login               UserBus::login                 > getSessionKeyByUser
/user                UserBus::getAll                > usuarioGetAll  
/user/{id:[0-9]+}    UserBus::getById               > usuarioGetById  
/user                UserBus::insert                > usuarioInsert   
/user/{id:[0-9]+}    UserBus::update                > usuarioUpdate 
/user/{id:[0-9]+}    UserBus::delete                > usuarioDelete  

# MENU 
----------------------------------------------------------------------------------------
/menu/full           MenuBus::getFullMenu           >  menu_getNodesDepth 
/menu/{id:[0-9]+}    MenuBus::getNodesDepthByUser   >  menu_getNodesDepthByUser 
/menu/samelevel      MenuBus::addNodeSameLevel      >  menu_addNodeSameLevel 
/menu/child          MenuBus::addNodeChild          >  menu_addNodeChild 
/menu/privileges     MenuBus::changeUserPrivilege   >  menu_changeUserPrivilege 
/menu/{id:[0-9]+}    MenuBus::update                >  menu_updateNode 
/menu/{id:[0-9]+}    MenuBus::delete                >  menu_deleteNodeMoveChild 

# PRODUCTO 
----------------------------------------------------------------------------------------
/product             ProductBus::getAll             > productGetAll
/product/{id:[0-9]+} ProductBus::getById            > productGetById

