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

The client stores this token (typically in memory or a cookie) and attaches it to future requests as:
