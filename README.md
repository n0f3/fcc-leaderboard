# FreeCodeCamp User Leaderboard

React powered app to visualize a list of Top 100 FreeCodeCamp user based on brownie points in the last 30 days and of all time. To achieve that it uses two API endpoints:

### https://fcctop100.herokuapp.com/api/fccusers/top/recent

This returns the top 100 FreeCodeCamp users in the past 30 days based on brownie points in the following format:

```
[
  {
    "username": "TheMrCharming",
    "img": "https://avatars0.githubusercontent.com/u/20990395?v=3",
    "alltime": 45,
    "recent": 44,
    "lastUpdate": "2017-04-21T19:52:38.431Z"
  },
  ...
]
```

### https://fcctop100.herokuapp.com/api/fccusers/top/alltime

This returns the top 100 FreeCodeCamp users of all time based on brownie points in the following format:

```
[
  {
    "username": "ooade",
    "img": "https://avatars.githubusercontent.com/u/11811904?v=3",
    "alltime": 467,
    "recent": 22,
    "lastUpdate": "2017-04-02T14:10:26.357Z"
  },
  ...
]
```

## [Live demo](https://n0f3.github.io/fcc-leaderboard)

## Installation

Before trying to run the project, make sure to initialize the folder by running ```npm install```.
This will take care of install all the project dependencies.  
After this you can run ```npm start``` to run the dev server locally which will be available at ```localhost:3000```.  

## Project Structure

```
.
├── package.json
├── public
│   └── index.html
├── README.md
└── src
    ├── components
    │   ├── App.js
    │   ├── Leaderboard.js
    │   └── User.js
    └── index.js

```