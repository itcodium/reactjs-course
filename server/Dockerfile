FROM  matricali/phalcon:3.4-php7.2-stretch-apache
RUN a2enmod rewrite
COPY apache2.conf /etc/apache2
RUN docker-php-ext-install mysqli  
RUN docker-php-ext-enable mysqli
RUN echo "extension=pdo_mysql" >> /usr/local/etc/php/php.ini \
 && service apache2 restart
WORKDIR /var/www/html
COPY . .
RUN  cd /etc/apache2 && ls -a && cat apache2.conf
EXPOSE 5000

 
 
