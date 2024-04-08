##  JWT v/s Session based authentication


## 1) JWT

## How it works

• When a user logs in the server generates a JWT containing the user's information and signs it using a secret key
• This JWT is then sent back to the client, which stores it,usually in local storage or a cookie
• For every subsequent requests to the server,thee clinet includes the JWT in the request headers
• The server validates the JWT to authnticate the user and extraxt their information.If the signature is valid and the token is not expired,the user is considereed authnticated

## Advantages
• Stateless - the server doesnt need to keep track of sessions.All necessary information is contained within the JWT itself
• Scalable - Since the srver doesnt store session information.It can easily scale horizontally


## Disadvantages
• Increased payload size
• Security 


## 2) Session-Based Authntication

## How it works

• When the user logs in, the server creates a unique session ID and stores the user's information(session data) on the server
• the session ID is sent back to teh client,typically stored as a cookie
• For each subsequent request,the client sends the session ID in the request headers
• The serveer retrieves the session data associated with the session ID to authenticate the user and authorize request

## Advantages
• Session data is tored on the server, making it less vulnerable to attaxks compared to storing tokens on the client side
• Sessions can be invalidated server-side, providing more control over user access

## Disadvantages
• Stateful: The server needs to maintain session state, which can become a scalability bottleneck, especially in distributed systems
• Increased Server Load: Storing session data on the server can increase server load, especially with a large number of active sessions




