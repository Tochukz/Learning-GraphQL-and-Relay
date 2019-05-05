# Learning GraphQL
## Chapter 4  
Instead of looking at your APIs as a collection of REST endpoints, you are going to begin looking at your APIs as collections of types.  
You need to formally define the types that your API will expose. This collection of types is called a schema.  

## Chapter 5
__Install apollo-server adn graphql__  
`$ npm install apollo-server graphql`   
 
__Remove apollo-server__  
`$ npm remove apollo-server`  

__Install apollo-server-express and express__  
`npm install apollo-server-express express`  

__Install GraphQL playground middleware__  
` $npm install graphql-playground-middleware-express --save-dev`  

### CONTEXT
Context is the location where you can store global values that any resolver can access. Context is a good place to store authentication information, database details,
local data caches, and anything else that is needed to resolve a GraphQL operation.

__Install mongodb__  
`$ npm install mongodb --save`    

__Install dotenv__
`$ npm install dotenv`