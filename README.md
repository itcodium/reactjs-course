# reactjs-course

- docker-compose build
- docker-compose up

    docker ps

    docker container ls -a
    docker container rm       1f63344a0537 308560b00b29   --force

    docker images -a
    docker image rm   2fb283157d3c      --force

  
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