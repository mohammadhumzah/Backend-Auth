How It Works
1. Registration
Client sends POST /api/auth/register with { email, password }.
The server:

Checks if the email already exists in MongoDB
Hashes the password using bcrypt (plaintext is never stored)
Saves the new user document
Returns a 201 with a success message

2. Login
Client sends POST /api/auth/login with { email, password }.
The server:

Looks up the user by email
Compares the submitted password against the stored hash using bcrypt.compare()
If valid, signs a JWT containing the user's id and sets an expiry
Returns the token to the client

The client stores this token (typically in memory or a cookie).

3. Logout
POST /api/auth/logout — since JWTs are stateless, the server doesn't store sessions, so there's nothing to delete server-side. Logout is handled client-side by discarding the token. This endpoint exists as a clean contract for the client to call, and can be extended later with a token blocklist if needed.


Key Concepts
Why bcrypt? Hashing is one-way — even if the database is leaked, plaintext passwords are not exposed. bcrypt is slow by design, which makes brute-force attacks expensive.
Why JWT? The server doesn't need to store session state. The token itself carries the user identity, verified by signature. This makes the API horizontally scalable — any server instance can verify any token as long as they share the same JWT_SECRET.
Why not store the token server-side on logout? Standard JWTs are valid until expiry. For most use cases, short expiry times (15m–7d) are sufficient. A full blocklist implementation requires a database lookup on every request, which defeats the stateless benefit. Both are valid tradeoffs depending on security requirements.
