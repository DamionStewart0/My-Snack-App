# My-Snack-App

## Overview

This full stack Mern application allows users to browse a variety of snacks that are available in Common Wealth Caribbean countries. General users will be able to purchase snack and have their products delivered, while the authenticated user(admin) will have have additional capabilities to create, update and destroy listings. The goalof this web app is to be minimal.

### Whimiscal wireframe
https://whimsical.com/my-snack-app-52KYWjCxr6ZXMQjyjRfFnm


## Schema

##### Product

```
const Listing = new Schema(
  {
    name: { type: String, required: true },
    imgURL: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    location: {type: String, required: true},
    userId: { type: Schema.Types.ObjectId, ref: "users" },
  },
  { timestamps: true }
)
```

##### User

```
const User = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password_digest: { type: String, required: true },
    listings: [{ type: Schema.Types.ObjectId, ref: "listings" }],
  },
  { timestamps: true }
);
```


## MVP

- Deployed full-crud backend && frontend
- Landing page (Choose country of origin)
- Dashboard
- Product list page
- Functional search and sort
- Product detail page
- Checkout page
- Order Page
- Authentication && authorization
- Display different routes for general users vs. authenticated users

## Post MVP

- Add video content to carousel
- Animating content on page scroll
- More detailed authentication
- Experiment with pop-ups, modals, and adding branding
- Refactor nav to be a two-part component
- UseContext for user
- Experiment with mapbox api
