#Dockerfile para contenedor de nodejs y nestjs

#From nos permite tener una imagen base para nuestro nuevo contenedor
FROM node:10.15.3-alpine

#instalamos Nest.Js
RUN npm i -g @nestjs/cli

#crea la carpeta donde tendre el codigo de nuestra app
#Cambien "my_nest_app" por el nombre que quieran 
RUN mkdir -p /my_nest_app

#establece como directorio de trabajo nuestra carpeta 'my_nest_app'
WORKDIR /my_nest_app

#exponemos el puerto 3000 que es el que usa nest para acceder a la app
EXPOSE 3000
