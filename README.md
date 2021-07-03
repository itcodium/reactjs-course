# reactjs-course

- docker-compose build
- docker-compose up

    docker ps
    docker container ls -a
    docker container rm       a100ca8f709f   --force

    docker images -a
    docker image rm     e43e672c4fd9    --force

  
# Iniciar base datos

    - Copiar script
        docker cp server/api/database/db.sql store_database:/db.sql

    - login to our container
        docker exec -it store_database /bin/bash

    - Once we're logged in, we can now login to mysql. pwd=root

        mysql -u root -p
        
    - select the database 

        use u447625416_react;	

    - source db.sql	

# 
docker run --name=store_database -p3306:3306 -v mysql-volume:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql/mysql-server:8.0.20

#### Login mysql and list databases

    - mysql -u root -p
    - show databases;

#### Buckup databases

    - docker exec -it store_database bash
    - mysqldump -u root -p --triggers --routines --databases  u447625416_react > react_20210703.sql;
    
#### Copiar el buckup al host

    - docker cp store_database:/react_20210703.sql ~/Documents/itcodium/reactjs-course/server/api/database/
    




