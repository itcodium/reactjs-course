# reactjs-course
    
    sudo  gnome-terminal

#### Install docker-compose     
    - apt-get install docker-compose
    - docker-compose --version

#### Init app

    sudo docker-compose build
    docker-compose up

#### commands
    docker ps
    
    docker images -a
    docker image rm     3147495b3a5c    --force

    docker container ls -a
    sudo docker container rm 297d7ef61127 --force

# Iniciar base datos (commanda line)

    - Copiar script
        docker cp server/api/database/install_db.sql store_database:/install_db.sql

    - login to our container
        docker exec -it store_database /bin/bash

    - Once we're logged in, we can now login to mysql. pwd=root

        mysql -u root -p
        
    - select the database 

        use u477008465_react;	

    - source install_db.sql


#### Login mysql and list databases 
    
    - mysql -u root -p
    - show databases;

### Buckup databases

    - docker exec -it store_database bash
    - mysqldump -u root -p --triggers --routines --databases  u477008465_react > react_20210703.sql;
    
#### Copiar el buckup al host

    - docker cp store_database:/react_20210703.sql ~/Documents/itcodium/reactjs-course/server/api/database/
    
### MYSQL workbench download

Intalar cualquiera de los siguientes:

    sudo apt install mysql-workbench-community    
    snap install mysql-workbench-community
    
Habilitar coneccion por contraseña

    snap connect mysql-workbench-community:password-manager-service

Matar proceso de mysql-workbench

    kill workbench: ps -ef |grep mysql-workbench

### MYSQL workbench configurar conexion

        hostname=localhost
        port=9906
        username= root
        password= root

##  docker-compose.yml database optional config

    volumes:
        - ./server/api/database:/tmp/database
    command: mysqld --init-file="/tmp/database/install_db.sql"
    
## Todo

    - https://docs.microsoft.com/en-us/aspnet/web-forms/overview/older-versions-getting-started/tailspin-spyworks/tailspin-spyworks-part-2
