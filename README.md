# Image share
- [Youtube - Fazt](https://www.youtube.com/watch?v=TqC3e8nBycg)
- [Github - FaztTech](https://github.com/FaztTech/nodejs-imgshare)

## Descriptions

### Description packages
- *express*: Base framwork
- *express-handlebar*: Tempaltes engine
- *mongoose*: Mongo connector
- *morgan*: Backend upload files
- *multer*: Upload images
- *fs-extra*: Promises filesystem
- *errorhandler*: Print errors
- *gravatar*: Assign image to email
- *md5*: For encodding gravatar

### Descriptions folders
- *controllers*: For determinates works
- *helpers*: Reutilice functions (md5, connections)
- *models*: Models for images, users
- *public*: Public sources (images, css, html)
- *routers*: Server applications routers
- *server*: Server logic
- *views*: views for user

## Run local
- Needs:
    - Docker
    - NodeJs 8+

### Install packages

```bash
npm i nodemon -D; # only develpment enviroment
npm install;
```

### Run mongoDb docker
> *smallfiles*: allow create file fo small size to 2GB

```bash
docker run --rm -itd -v $HOME/mongodb:/etc/mongo -p 27017:27017 -e _MONGO_INITDB_ROOT_USERNAME="myuser" -e _MONGO_INITDB_ROOT_PASSWORD="mypassword" --name mongo mongo:3.4.18 --smallfiles;

# command connection
mongo --username "myuser" --password "mypassword" --authenticationDatabase admin --host "localhost" --port 27017;

# Select In mongo
use imgshare;
db.images.find();




```
### Run app
```bash
npm start;
```
