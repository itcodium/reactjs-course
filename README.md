# reactjs-course
    
    sudo  gnome-terminal

    - docker-compose up
    - docker-compose build


    docker ps
    
    docker images -a
    docker image rm     5c62e459e087    --force

    docker container ls -a
    sudo docker container rm 0011e1df5737 --force

# Iniciar base datos (commanda line)

    - Copiar script
        docker cp server/api/database/db.sql store_database:/db.sql

    - login to our container
        docker exec -it store_database /bin/bash

    - Once we're logged in, we can now login to mysql. pwd=root

        mysql -u root -p
        
    - select the database 

        use u447625416_react;	

    - source db.sql	


#### Login mysql and list databases 
    
    - mysql -u root -p
    - show databases;

### Buckup databases

    - docker exec -it store_database bash
    - mysqldump -u root -p --triggers --routines --databases  u447625416_react > react_20210703.sql;
    
#### Copiar el buckup al host

    - docker cp store_database:/react_20210703.sql ~/Documents/itcodium/reactjs-course/server/api/database/
    

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
