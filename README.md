### What is MESH?
MESH is an e-commerce platform that aims to promote and handle the purchasing of consumer electronics.
Guests can see all the products from the home page.
To buy them, a guest can sign-up and buy an item straight from the home page.
All purchases are securely handled by React Stripe.js, an industry-trusted software
This repository is only the front-end of the whole project. The back-end server repository
can be found here:
[Back-End](https://github.com/MESHisBest/mesh-ecommerce-backend)
[Deployed client](https://meshisbest.github.io/mesh-ecommerce-client/)
[Deployed server](https://account.mongodb.com/account/login)

### Technologies Used
- HTML
- Javascript
- CSS
- React

## Unsolved issues
There are areas of this project that can be improved over future iterations.
Currently, the codebase includes some un-used components. Aside from this, the team hopes to improve the user experience by exploring features like a "cart" and such.

## Development Timeline

### Planning
Our Team decided on an Minmum-Viable-Product (mvp), that includes the user-stories below. While planning, we also decided on removing some features that might have been too amibtious for version 1 (see unsolved issues)

### Process
One of the first areas we focused on, was making sure the site had options to sign up, in, and out. After this initial goal, our sights were set on 2 areas: the building up-to and the post-Stripe groundwork. This included adding items for purchase to the home page, a "buy now" button, and a "my  orders" page that would include all of the previouly-purchased items. Finally, our team tackled learning Stripe together.

## Problem-Solving Strategy
Our team has found that when there is a problem, we would explain it to the whole team and discuss potential work-arounds, or we collectivley search for online resources that could fix the problem. Any updates or fixes to bugs would be communicated to the team as well.

## Wireframes, User Stories
[wireframes](https://media.git.generalassemb.ly/user/32476/files/42d76b80-5fb7-11eb-84a5-4e55e1876f9d)
### User Stories
As an unregistered user, I would like to sign up with email and password.
As a registered user, I would like to sign in with email and password.
As a signed in user, I would like to change password.
As a signed in user, I would like to sign out.
As an unregistered user, I would like to see all of the products.
As a signed in user, I would like to add and remove products from a shopping cart.
As a signed in user, I would like to purchase products in a shopping cart using Stripe.
As a signed in user, I would like to see all my past orders.