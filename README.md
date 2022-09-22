## System Requirements
- Latest LTS version of Node
- MySQL Server
- Java 8

## Getting Started


### Backend
How to run the code in the `/JavaServer` folder

* If you don't have MySQL Server installed you can follow the instructions for installation at: `https://dev.mysql.com/downloads/mysql/`

* After you have MySQL Server installed, and have created a username and password, you can connect MySQL Server to the project by modifying the example.properties file at: `src/main/resources/example.properties`
* The next step is to change the name of the example.properties file to `application.properties`, then put in your MySQL Server credentials
* The example.properties file: 
```
server.port=4567
spring.datasource.url=jdbc:mysql://localhost/code_challenge_db?createDatabaseIfNotExist=true&useSSL=false&serverTimezone=UTC&allowPublicKeyRetrieval=true
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect
```
Once you have updtaed this file you should be able to run the project at: `http://localhost:4567`.
* Note about port: 
You can change the port the project runs on in the application.properties file at server.port


### Frontend
* If you don't have Node installed, you can follow the instructions at: `https://nodejs.org/en/`
Run the frontend code within the `/client` folder:

```bash
cd client
npm install
npm run start
```

After running previous commands, you should see the website at `http://localhost:3000`.

Open the `/server` folder as a Maven project within a Java IDE and run the project. I suggest using IntelliJ IDEA.


