# MeteorProductReview
A system that allow users to write reviews about products add products for reviews.

## Features

* **Front-end:** twbs:bootstrap
* **Routing:** iron:router
* **User accounts:** accounts-ui, accounts-password
* **Uploading files:** CollectionFS
* **Format data & time:** [momentjs:moment] (https://atmospherejs.com/momentjs/moment)
* **Flash messages:** [mrt:flash-messages](https://atmospherejs.com/mrt/flash-messages)

## Deployment:


## Structure
```
MeteorProductReview/
├── server/
│   └── common.js
├── client/
│   ├── common.js
│   ├── templates/
│   │   ├── includes/
│   │   │   ├── head.html
│   │   │   ├── sidebar.html
│   │   │   ├── navbar.html
│   │   │   ├── footer.html
│   │   │   ├── layout.html
│   │   │   └── includes.js
│   │   ├── homepage/
│   │   │   ├── homepage.html
│   │   │   └── homepage.js
│   │   ├── products/
│   │   │   ├── products.html
│   │   │   └── products.js
│   │   └── addproduct/
│   │       ├── products.html
│   │       └── products.js
│   └── stylesheets/
│       └── pr.css
├── lib/
│   ├── common.js
│   ├── collections.js
│   └── router.js
└── public/
    └── img/
```
