
## System Requirements
- Latest LTS version of Node
- MySQL Server
- Java 8

## Getting Started


### Backend

Open the `/JavaServer` folder as a Maven project within a Java IDE and run the project. I suggest using IntelliJ IDEA.
* If you don't have MySQL Server installed you can follow the instructions for installation at: `https://dev.mysql.com/downloads/mysql/`.

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
spring.jpa.defer-datasource-initialization=true
spring.sql.init.mode=ALWAYS
```
Once you have updtaed this file you should be able to run the project at: `http://localhost:4567`.
#### Note about port: 
* You can change the port the project runs on in the application.properties file at server.port
#### Note about the data.sql file:
* When you initially run the backend, the app will auto populate the db with data from the data.sql file. If you stop the app, then restart the backend, the app will once again auto populate the db with the same data, you will get duplicate data.



### Frontend
* If you don't have Node installed, you can follow the instructions at: `https://nodejs.org/en/`
Run the frontend code within the `/client` folder:

```bash
cd client
npm install
npm run start
```

After running previous commands, you should see the website at `http://localhost:3000`.

## Future Development
There's still things I would like to have got done on this, given that I had one week to accomplish this I feel good about where this project is, still there's a few things I would like to do, here's a list of some of them...

#### Styling
I would like to have had the time to make this app look amazing to an end user, one approach I would have taken is utilizing a framework like react bootstrap or material UI, especially for their grid systems, if I had another few days I could have made this app responsive.

#### Unit Tests
I really wanted to have time to write tests, I would utilize JUnit for the Java stuff, and Jest for the JavaScript/React stuff, this is somethig i'm still interested in doing but currently don't have the time.

#### Put mapping
Something that fell through the craks for me was put mapping, I would like to have made the home page inventory update every time you bought something at one of the stores, but again time wasn't on my side for this project.

There's other things that I would like to have gotten done but the things that I already mentioned are the major ones. 

## Conclusion
I'd like to say this was a lot of fun, I really enjoy the challenge! I hope I didn't go to overboard and take too much creative license. I know this isn't exactly how the challenge was supposed to be built, but I wanted to really showcase what i'm capable of, I thank you for allowing me this opportunity! 

Thank you!!!

* Created by: Nick Adams