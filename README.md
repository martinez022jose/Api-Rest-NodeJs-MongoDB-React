# Rest-API-NodeJs :boom:

El objetivo es crear una **REST-API** con **Node JS**. Node Js lo usaremos para crear nuestro servidor. Ademas utilizaremos **Express** (framework de Node js) 
que nos ayudara a reducir la dificultad del codigo, ya que tranquilamente podria realizarse la REST-API solo con Node Js. Cabe clarar que se utilizara un **.json** 
como base de datos, es decir, que el .json simulara una base de datos al momento de realizar peticiones (GET, POST, DELETE, PUT)

## Pre-requisitos :page_with_curl:

* Git
* Node Js
* Herramienta de testing (Ej. Postman)
* Editor de codigo (Ej. Visual Studio Code)

## Instalación :wrench:

  :white_check_mark:  ***git clone*** https://github.com/martinez022jose/Rest-API-NodeJs.git <br>
  
  :white_check_mark: ***npm i o npm install*** <br>

## Despliegue :airplane:

 :white_check_mark: ***npm run dev*** <br>

## Comenzando :loudspeaker:

Todas las peticiones tendran el prefijo **"/api/movies"**, ya que así las definimos. Ejemplos posible:

- Petición GET :

> GET /api/movies/

 Se debera observar listado, en formato **Json**, todas las movies cargadas hasta el momento de la petición, caso contrario sera **[ ]** (vacio)

- Petición POST :

> POST /api/movies/

En este caso se debe pasar un **Json** para su almacenamiento. Se debera observar listado, en formato **Json**, todas las movies incluyendo la almacenada.

- Petición PUT :

> PUT /api/movies/***id***

En este caso se debe pasar un "id" por ruta para lograr identificar el registro a actualizar y un **Json** modificado que reemplazara al original. 
Se debera observar listado, en formato **Json**, todas las movies con la actualizacion del registro dado

- Petición DELETE :

> DELETE /api/movies/***id***

En este caso se debe pasar un "id" por ruta para poder identificar el registro y eliminarlo. Se debera observar listado, en formato **Json**, 
de todas las movies sin el registro dado. 

## Construido con :hammer_and_pick:

* Node Js

* Express

## Autor/s :fountain_pen:

* **Jose Martinez Gutierrez**
