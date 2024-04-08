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

## JWT and bcrypt serve different purposes within an authentication system. JWTs are used for transmitting and validating claims, providing authentication and authorization in stateless environments. On the other hand, bcrypt is used for securely hashing and storing passwords in a way that is resistant to attacks. In practice, it's common to use bcrypt to hash passwords during user registration or authentication processes and then use JWTs for session management and access control


## What are cookies?

Cookies are small pieces of data stored by websites on a user's web browser. They are used to maintain stateful information between HTTP transactions, enabling websites to remember user actions and preferences across different sessions or pages. Here's a more detailed explanation:

Purpose:

Cookies serve several purposes in web development, including:

Session Management: Cookies can be used to identify and track user sessions, allowing websites to maintain stateful interactions with users.

Personalization: Websites can use cookies to remember user preferences, such as language settings, theme preferences, or items in a shopping cart.

Tracking and Analytics: Cookies can be used to collect data on user behavior, such as pages visited, time spent on each page, and interactions with content. This data is often used for analytics, advertising targeting, and website optimization.

Authentication: Cookies are commonly used to store authentication tokens or session identifiers, allowing users to remain logged in across multiple requests or sessions.
Structure:

Cookies are typically stored as text files on the user's device, such as a computer or smartphone.
Each cookie consists of a key-value pair representing the data associated with the cookie.
Cookies may also include additional attributes such as expiration date, domain, path, and security settings.
Types of Cookies:

Session Cookies: These cookies are temporary and are deleted when the user closes their web browser. They are often used for session management and authentication.

Persistent Cookies: These cookies have an expiration date set in the future and remain on the user's device until they expire or are manually deleted.

First-Party Cookies: Set by the website the user is currently visiting.

Third-Party Cookies: Set by domains other than the one the user is visiting, often used for tracking and advertising purposes.


