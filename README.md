# PIZZARO : Track orders Realtime

<p align="center">
  <a href="" rel="">
 <img width=300px style="border-radius:0.3rem" src="./public//img/cover.png"></a>
</p>

<div align="center">

<a href="https://pizzaro-track-order-realtime.onrender.com/">![version](https://img.shields.io/badge/Deployed-Link-0E89C6)</a>

<h4>Pizzaro transforms pizza ordering with real-time order tracking, secure online payments, and seamless cart management including 'Add to Cart' and 'Quantity Adjustments'. Experience easy login, registration, and password updates, complemented by a dedicated admin panel for efficient order status control.</h4>

[![Repo Type](https://img.shields.io/badge/repo_type-Public-fcc419?style=flat&link=https://github.com/arpitjana21/PIZZARO-Track-Order-Live)](https://github.com/arpitjana21/PIZZARO-Track-Order-Live)
![version](https://img.shields.io/badge/node-v18.15.0-42BD14)
![version](https://img.shields.io/badge/npm-v9.5.0-red)
[![License](https://img.shields.io/badge/license-MIT-85e2cd.svg)](https://opensource.org/license/mit/)

</div>

## Gallery

<img style="width:100%" src="/public/img/screenshots/1.png">
<img style="width:100%" src="/public/img/screenshots/3.png">
<img style="width:100%" src="/public/img/screenshots/2.png">

## Application Features

Pizzaro is a Server Side Rendered (SSR) pizza delivery application built using Node.js, Express, EJS, MongoDB, Socket.IO, and Stripe. It offers a range of features to streamline the pizza ordering and delivery process.

**1. Authentication**: Users/Admin Registration, Login, Logout.\
**2. Live Updates**: Track pizza order in real-time using Socket.IO for live updates on order status.\
**3. Secure Payments**: Make online payments using Stripe for a secure and seamless payment experience.\
**4. Admin Controll**: Admin full control over order status and canceletion.\
**5. Password Update**: Users can change their account passwords.\
**6. Account Details Update**: Users can update their account information.\
**7. Responsive**: Responsive across all devices [ xl, lg, md, sm, esm ].

## Getting Started

**Step 1 :** Install `npm packages`

```
npm install
```

**Step 2 :** Create a `config.env` file with following variables

```
PORT=8000
DATABASE={{YourMongoDBConnectionURL}}
DATABASE_LOCAL={{YourLocalMongoDBConnectionURL}}

COOKIE_SECRET={{CookieSecretKey}}

JWT_SECRET={{YourJWTSecretKey}}
JWT_EXPIRES_IN=90d
JWT_COOKIE_EXPIRES=90

STRIPE_SECRET_KEY={{YourStripeSecretKey}}
```

**Step 3 :** Must have VS-Code Extentions

```
1. Prettier-Code formatter
2. EJS Beautify
3. EJS language support
```

**Step 4 :** Finally

Run on *DEVELOPMENT : `npm run dev`\
Run on *PRODUCTION : `npm start`

**Step 5 :** Compile

[ Compile SCSS & JS ]\
Run Laravel Mix: `npm run lmix`\
[ Compile Tailwind ]\
Run Tailwind Watcher: `npm run tailW`

```
// Output :
API URL: {{PROTOCOL}}://{{HOST}}:{{PORT}}/
e.g.
*PROTOCOL = http
*HOST = 127.0.0.1
*PORT = 8000
*API URL = http://127.0.0.1:8000/
```

## Tech & Tools

<img style="height: 3rem" src="https://i.postimg.cc/GhzG6X78/Untitled-design.png">\
<img style="height: 3rem" src="https://i.postimg.cc/6QMP3Vpy/Untitled-design-1.png">

## Contact Me

[![GitHub ](https://img.shields.io/badge/GitHub-@arpitjana21-orange?style=flat&logo=GitHub&link=https://github.com/arpitjana21)](https://github.com/arpitjana21)
[![LinkedIn ](https://img.shields.io/badge/LinkedIn-@arpitjana2103-0077b5?style=flat&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/arpitjana2103/)](https://www.linkedin.com/in/arpitjana2103/)

## LISENSE

[![License](https://img.shields.io/badge/license-MIT-85e2cd.svg)](https://opensource.org/license/mit/)

Copyright (c) 2023 Arpit Jana
