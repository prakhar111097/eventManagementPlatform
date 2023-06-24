# eventManagementPlatform
A basic Event Management Platform (EMP) for an event-organizing company.

Steps to run the project :-
    1. Clone the repository in the local
    2. Go inside the repository
    3. Execute the command "npm i" to install all the dependencies
    4. Execute "node app.js" to run backend in local server

Steps to execute APIs using postman:-
    1. open postman
    2. Import "postmanCollection.js" present in the repository to create the collection
    3. Execute the APIs present in the collection

Details about the project:-
    app.js -- Contains connection to the server and base routes.Also it stablishes the connection with database. It is the base file of the project.
    db/dbConnection.js - contains the connection code to mongoDB using mongoose library
    db/models/event.js - contains schema and model for the events
    routes/eventRoutes.js - contains all the routes required for the Events
    services/eventServices.js - contains all the functionalities that are required to be executed by different apis
