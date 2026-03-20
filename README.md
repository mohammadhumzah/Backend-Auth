auth-api/
├── controllers/
│   └── authController.js   # Logic for register, login, logout, profile
├── middleware/
│   └── authMiddleware.js    # JWT verification — protects private routes
├── models/
│   └── User.js             # Mongoose schema (username, email, hashed password)
├── routes/
│   └── authRoutes.js       # Route definitions wired to controllers
├── .env                    # Environment variables (never commit this)
├── .env.example            # Safe template for other devs
├── server.js               # Entry point — Express app setup
└── package.json
