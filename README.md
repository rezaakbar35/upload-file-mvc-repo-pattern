
# ✨ Multer Upload File and MVC-repo-service Design Pattern Project ✨

This project will focus on the use of Multer for file uploads, displaying them using serve static, and implementing the MVC-Repo-Service design pattern. The implementation of the MVC-Repo-Service design pattern involves creating a CRUD RESTful API to retrieve data from the database.

The final result of this project is to upload a file (in this case, a photo) and display it to the user if the correct URL is entered.



## 🛠️ Installation

There are several npm packages that will be used in this project, including express, pg, nodemon (optional), jsonwebtoken and swagger.

```bash
  npm install --save express pg multer body-parser nodemon
```
    
## 📥 Import Database
Before entering the project, we need to import the database first.

You can download the database here: https://github.com/fathy17/modul-3-rakamin/blob/master/movies-database.sql

How to Import Database
1. Open pgadmin
2. Create database (example: movies-database)
3. Right click on the new database and choose restore
4. Select movies-database.sql and click restore
5. The database all set!
    
## ⚙️ How to Run Project
Before we run the project, make sure we have installed Postman. After installing Postman, the next step is to run this project directly.
```bash
nodemon app.js
```
### Upload Photo 
The first step is to open Postman and enter the URL.
```bash
/POST http://localhost:3000/movies/upload/1
```
Before pressing "SEND," at the bottom of the URL, select "body." After that, you can type the following in the "key" column.
```bash
photo
```

And then, select "file" as the data type you want to input. Finally, you can choose the image you want to upload.

### Check the Uploaded Photo
You can obtain the URL to access your photo by following these steps
```bash
/GET http://localhost:3000/movies/1
```
After that, you can copy the URL and paste it into the code below
```bash
http://localhost:3000/movies/upload/photo-1697345079329-409126259.jpg
```

### CRUD RestFUL API
there are 10 HTTP Method (Upload photos will not be counted) that can be used in this project, such as:
1. /GET /movies
2. /GET /movies/:id
3. /GET /users
4. /GET /users/:id
5. /POST /movies
6. /POST /users
7. /PUT /movies/:id
8. /PUT /users/:id
9. /DELETE /movies/:id
10. /DELETE /users/:id

The first section is /GET method, where this method can display queries for all movies

```bash
/GET http://localhost:3000/movies
                and
/GET http://localhost:3000/users
```

The second section is /GET method by id to display a specific movie/user query.
```bash
/GET http://localhost:3000/movies/35
                and
/GET http://localhost:3000/users/71
```

The third section is /POST method to add a movie/user to the database.
```bash
/POST http://localhost:3000/movies/

{
    "title": "My Hero Academia",
    "genres": "Action",
    "year": "2022",
}
            and

/POST http://localhost:3000/users/

{
    "email": "askdjhf@gmail.com",
    "gender": "Male",
    "password": "skdfjhsdf4",
    "role": "Programmer"
}
```

The fourth section is /PUT method to update a specific movie/user based on the obtained id.
```bash
/PUT http://localhost:3000/movies/101

{
    "title": "My Hero Academia",
    "genres": "Action",
    "year": "2023",
}

            and

/PUT http://localhost:3000/movies/101

{
    "email": "askdjhf@gmail.com",
    "gender": "Male",
    "password": "skdfjhsdf4",
    "role": "Head of Research"
}
```

The fifth section is /DELETE to delete a specific movie/user based on the id.
```bash
/DELETE http://localhost:3000/movies/101
            and
/DELETE http://localhost:3000/users/101
```



