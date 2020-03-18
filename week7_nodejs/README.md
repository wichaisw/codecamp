# MVC with express % sequealize

## contents
* Model-View-Controller (MVC)
* Create, Read, Update, Delete (CRUD)
* Object-relational mapping (ORM)

## required modules
* express
* body-parser
* mysql2
* sequelize
* sequelize-cli
* ejs

## sequelize settings
1. sequelize-cli init:config<br>
    - this will create config files & folders
2. in config.json's 'development' section,
    - rename database
    - change password according to MySQL workbench root password
    - add "timezone": "+07:00"
3. db:create
4. init models
    - this will create 'models' folder along with the required setting in index.js

    Now you can add tables by creating JS files in 'models' folder

## further personal research
* database migration