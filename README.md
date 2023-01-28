# Product List

Simple e-commerce app built using django rest framework and ReactJs. It displays a paginated list of products retrieved from the backend, supports adding them to the cart, and has a single view for each product.
## Technologies:

- Backend: Python with django/rfw
- Frontend: ReactJs

## Backend optimization:

- Limited the number of requests to 60 per minute to non registered users using the built-in `throttling class` from the rest of framework
- Cached the get requests responses for 15 minutes using the build it `cache_page` decorators.
- Handled responses pagination using `pagination_classes` from the rest framework. Each response body shows only 5 products.
- Used `Agolia` third-party API to utilize searching by indexing the searchable fields.
- Sorted and Categorized based on multiple attributes in the backend.

## Frontend optimization:

- Used the `useReducer` hook for cart state management.

## Notes:

- Authentication is builtin in the rest framework, but for time limits I didn't implement it in the front end.
- Although I created a cart and cart items model, I used a shared cart for all users as I didn't implement authentication in the first place.
