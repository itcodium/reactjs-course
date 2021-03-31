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