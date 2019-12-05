## This branch
This branch hasn't had a chance to be merged back into master yet 
but it will servce as a place where, if you have docker installed on 
your machine, you can pull -> build -> run the entire application on 
your local box.  

The build process will create an image containing MySQL, create the schema and 
seed it using [flyway](https://flywaydb.org/), and then start the springboot application at  http://localhost:8090/

#### Running locally
In order to start the application in docker run
>docker-compose build passport-web
>
>docker-compose up -d --force-recreate  passport-web

After that the application should be available at [http://localhost:8090](http://localhost:8090)

_The reason that this is not merged is because the environmwent variables weren't
being passed into the spring contianer and I had to hard code the db  url/un/pw_


# Purpose

# About
The application is built using [SpringBoot](https://spring.io/projects/spring-boot), 
[Gradle](https://gradle.org/), and a few front-end libraries to help with the tree [(AimaraJS)](https://github.com/rafaelthca/aimaraJS/wiki/Usage), 
and the dialogs [(tingle.js)](https://tingle.robinparisi.com/) mostly 

# Todo
* More focus on UI.  
    * standardizing fonts / sizes
    * better color selection
    * look at implementing bootstrap or material to help standardize and reduce the number of custom styles
    * maybe some transitions or smooth animations between states
* Revisit Accessibility
    * I've made sure to add alt and title tag to everything, but there's a lot more to accessibility than this.  For instance I need to ensure the contrast is correct, not display errors with only highlighting, etc
* Show a connection status that will switch state showing that the socket connection has died
* Containerize it
  * Ideally you'd be able to pull down the repository run a _docker compose up_ and the entire application, including the database would be working in a local environment   
    
