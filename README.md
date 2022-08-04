# JSON and REST API

## REST (Representational State Transfer)
- Describes method of defining desources as URLs and actions on those resource with HTTP methods
    - URLs as nouns
    - HTTP methods as verbs on those nouns
-REST has you think of the URL as a command line
- The resource is the “file” or entity
    - http://example.com/dogs/1 (an object)
- The HTTP methods used to access the object correspond to the 
actions to perform on the entity
    - POST - makes a new entity (Create)
    - GET - fetches the entity (Read)
    - PUT, PATCH - update an entity (Update)
    - DELETE - delete an entity (Delete)
### RESTful versus REST
RESTful = in the spirit of REST than strictly conforming


## CRUD (Create Read Update Delete)
- Pattern of the actions we might perform on a resource of piece of data


## Public versus Private points
- Public
    - Relatively unchanging and when changes likely can't force upgrade 
    - If changes it follows Open-Closed Principle
    - Has to be understandable and documentation may be considerable 
       - Has to assume malfeasance inherently 
       - Malformed submissions, rate abuse, API key share, etc.
- Private

## JSON (JavScript Object Notation)
- JS type subset that is serialized
    - Strings, Numbers, Booleans, Null, Arrays and Stringified objects (string keys)
- Super easy to use
    - JS object -> JSON 
    > ```JSON.Stringify()```
    - JSON -> JS 
    > ```JSON.Parse()```
- Example:
```JS
let obj = {
    name:'Stella',
    type: 'Dog',
    age: 2,
    friendly: true
};

//serialize this object
let payload = JSON.stringify(obj);

//result
{ 
    "name": "Stella", "type":"Dog", "age":2, "friendly":true
}
```

## REST is also independence of Clients

All types of apps (Dynamic web apps, android, iOS, desktop apps, JS Web App) -> REST API -> Database
## REST API Basics:

Clients send

--->  HTTP GET    

--->  HTTP POST        ---> REST API (Receives HTTP Requests from clients and does whatever request needs i.e. create users)     <---------> Database (Our Rest API queries the database for what it needs)

--->  HTTP PATCH 

Response: When the REST API has what it needs, it sends back a response to the clients. This would typically be in JSON or XML format.

## REST is Not the Backend!!
It is the API to the Backend!
- Database:
    - Structure in memory 
    - File(s) in filesystem
    - Database
        - SQL (Relational Style)
        - NoSQL (Document Style)
    - The end point itself may encapsolate many systems themselves that do other things.

## Tech Overview
- Collections of client data
    - Static Data- Browser type (version, mobile/desktop) screen resolution, load time performance and connection rates
    - Run Time Data
        - Performance
        - JS errors - window.onerror (optional but encouraged)
        - Events - Passive vs Defined
            - Passive: arbitrary user events (click, scroll, etc)
            - Defined: myTrack ('eventname', 'value) - (optional but encouraged)
    - Storage of collected Data
        - Ingest and save immediately
        - Ingest, clean, and then save
        - DB type -SQL vs NoSQL
    - Query of collected data
    - Reporting Backend
    - Authentication for Reporting users
        - Simple username/password vs OAuth style
        - Buy / Find / Build Trade-off
        - User Management
    - Basic Navigation to Reporting Pages
        - Tables/Grids
        - Charts
            - Static vs dynamic
        - Destribution
            - Print, Email or Share
    - Collector Script -Client Side JS
        - end user facing
    - Reporting backend
    - Reporting Frontend
    - Traditional Page Style versus SPA Style

## MVC
   MVC (Model-View-Controller) is a pattern in software design commonly used to implement user interfaces, data, and controlling logic. It emphasizes a separation between the software's business logic and display. This "separation of concerns" provides for a better division of labor and improved maintenance.

- The Model

The model defines what data the app should contain. If the state of this data changes, then the model will usually notify the view (so the display can change as needed) and sometimes the controller (if different logic is needed to control the updated view).

Going back to our shopping list app, the model would specify what data the list items should contain — item, price, etc. — and what list items are already present.

- The View

The view defines how the app's data should be displayed.

In our shopping list app, the view would define how the list is presented to the user, and receive the data to display from the model.

- The Controller

The controller contains logic that updates the model and/or view in response to input from the users of the app.

So for example, our shopping list could have input forms and buttons that allow us to add or delete items. These actions require the model to be updated, so the input is sent to the controller, which then manipulates the model as appropriate, which then sends updated data to the view.

You might however also want to just update the view to display the data in a different format, e.g., change the item order to alphabetical, or lowest to highest price. In this case the controller could handle this directly without needing to update the model.


