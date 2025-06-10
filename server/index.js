const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Check if environment variables are loaded
console.log("Environment check:");
console.log("PORT:", PORT);
console.log("MONGO_URI:", MONGO_URI ? "✓ Loaded" : "✗ Missing");
console.log("JWT_SECRET:", process.env.JWT_SECRET ? "✓ Loaded" : "✗ Missing");

// Middleware
app.use(cors());
app.use(express.json());

// Import and use routes
try {
  const userRoutes = require("./routes/userRoutes");
  app.use("/api/users", userRoutes);
  console.log("✓ User routes loaded successfully");
} catch (error) {
  console.error("✗ Error loading user routes:", error.message);
}

// Basic routes
app.get("/", (req, res) => {
  res.json({ 
    message: "API is running",
    endpoints: [
      "GET /api/test",
      "POST /api/users/register", 
      "POST /api/users/login",
      "GET /api/users/profile"
    ]
  });
});

// Test route
app.get("/api/test", (req, res) => {
  res.json({ 
    message: "API endpoints are working",
    timestamp: new Date().toISOString()
  });
});

// Connect to MongoDB and start server
mongoose
  .connect(MONGO_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  })
  .then(() => {
    console.log("✓ MongoDB connected successfully");
    app.listen(PORT, () => {
      console.log(`✓ Server running on http://localhost:${PORT}`);
      console.log("Available endpoints:");
      console.log(`  - http://localhost:${PORT}/`);
      console.log(`  - http://localhost:${PORT}/api/test`);
      console.log(`  - http://localhost:${PORT}/api/users/register`);
      console.log(`  - http://localhost:${PORT}/api/users/login`);
    });
  })
  .catch((err) => {
    console.error("✗ MongoDB connection error:", err.message);
    process.exit(1);
  });

// Error handling middleware
app.use((error, req, res, next) => {
  console.error("Server error:", error);
  res.status(500).json({ 
    message: "Internal server error",
    error: process.env.NODE_ENV === 'development' ? error.message : undefined
  });
});

// Handle unmatched routes
app.use("*", (req, res) => {
  console.log(`404 - Route not found: ${req.method} ${req.originalUrl}`);
  res.status(404).json({ 
    message: `Route ${req.method} ${req.originalUrl} not found` 
  });
});