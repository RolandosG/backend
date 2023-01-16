# Shopmart

https://storepage-back-end.herokuapp.com/

- / contains customers.
- /products contains products.
- /products?category=shoes contains shoes in said category.

### Back-end app in the form of a restful API for company Shopmart.
### This allows administrators to manage products and customers.

This application recieves and requests data in the form of JSON
it responds to client requests in the form of JSON as well.

Customer and Product endpoints are as follows.

- creating product and user registration.
- user registration Schema consists of first name, last name, email, password, and phone number in the form of an array which is not required.
- product registration Schema consists of name, price, description, category, quantity, best seller or not, product photo, and date created.

- end point for retrieving all customers and products. 
- end point for retrieving all product categories.
- end point for retrieving if the item is a best seller or not.
- end point for retrieving a specific customer or product by ID.
- end point that updates a specific customer or product by ID.
- end point that can delete an existing customer or product by ID.

# run this
download zip create your project
npm install everything important
Create a config, create a file called keys.env
create the environment var MONGODB_QUERY_STRING - database name goes here
PORT - Assign 5000
Run using npm run dev
