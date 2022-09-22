## System Requirements
- Latest LTS version of Node
- MySQL Server
- Java 8

## Getting Started

* If you don't have Node installed, you can follow the instructions at: `https://nodejs.org/en/`
* If you don't have MySQL Server installed you can follow the instructions for installation at: `https://dev.mysql.com/downloads/mysql/`

After you have MySQL Server installed, and have created a username and password, you can connect MySQL Server to the project by modifying the example.properties file at: `src/main/resources/example.properties`
The first step is to change the name of the example.properties file to `application.properties`, then put in your MySQL Server credentials

Run the frontend code within the `/client` folder:

```bash
cd client
npm install
npm run start
```

After running previous commands, you should see a website with instructions at `http://localhost:3000`.

Open the `/server` folder as a Maven project within a Java IDE and run the project. I suggest using IntelliJ IDEA.


