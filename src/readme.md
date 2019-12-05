_if you want to run the locally please check out the "[CONTAINERIZATION](https://github.com/puttzy/websocket-factory/tree/container)" branch and follow the directions there_ 


# Purpose
This Application was created as a back-end programming challenge as a test for a locally company.  At a high level it was intended to: 
_"Demonstrate you knowledge of several technologies, including databases, backend design, and UI/UX by dcreating a live updating tree view as a web application."_

#### More [requirements](https://github.com/puttzy/websocket-factory/blob/master/src/main/resources/public/images/requirements.png)
* The tree should contian a group of nodes, with a main (root) node that can have any number of 'factories'.
* These factory nodes can in turn generate a set amount of random numbers (up to 15), represented as child nodes of their respective factories.
* Factories and children should be created through some means of user input (right, click, button press, etc) specifying the number of children to generate (up to 15) and the ranges of those childres.
* Factories should have an adjustable name assigned to them, be removable, and have an adjustable lower and upper bound for the random number generation.
* You may use any programming languages and front-end design styles of your choosing to create the project
* All users should see any changes made to the tree immediately across browsers without refreshing or polling.
* The state of the tree should remain persistent; reloading should not undo any state.
* All of a factory's existing child nodes shold be removed upon each new generation.
* Your project should be secure, validate inputs, and protect against injections.
* Your project shold be hosted on the web using a service such as Amazon AWS or Heroku to run your submission.
* The project should exhibit botha  frontend and backend codebase built by you.
* Use a database on your backend, not firebase.
* Please submit you project, link, and source to the email listed below



# About
The application is built using [SpringBoot](https://spring.io/projects/spring-boot), 
[Gradle](https://gradle.org/), old-school _[VanillaJS](http://vanilla-js.com/)_, [(AimaraJS)](https://github.com/rafaelthca/aimaraJS/wiki/Usage) for the tree, 
 [(tingle.js)](https://tingle.robinparisi.com/) for dialogs, [stompJS](http://jmesnil.net/stomp-websocket/doc/) for help with WebSockets, and a MySQL database.  



# Todo
* More focus on UI.  
    * standardizing fonts / sizes
    * better color selection
    * look at implementing bootstrap or material to help standardize and reduce the number of custom styles
    * maybe some transitions or smooth animations between states
* Revisit Accessibility
    * I've made sure to add alt and title tag to everything, but there's a lot more to accessibility than this.  For instance I need to ensure the contrast is correct, not display errors with only highlighting, etc
* Add some selenium, junit, & dbunit testing
* Containerize it _(partially done)_
  * Ideally you'd be able to pull down the repository run a _docker compose up_ and the entire application, including the database would be working in a local environment
  * **If you want to**  you can switch to the "[CONTAINERIZATION](https://github.com/puttzy/websocket-factory/tree/container)" branch and follow the directions there to run the app in a container
    