import express from "express";
import { authenticateUser } from "./middleware/authentication";
import { authorizeRole } from "./middleware/authorization";

const app = express();
app.use(express.json());

// Profile Endpoint (accessible by authenticated users)
app.get("/profile", authenticateUser, (req, res) => {
    res.json({ message: "User Profile", user: res.locals.user });
});

// User Data Endpoint (accessible by admins only)
app.get("/users/:id", authenticateUser, authorizeRole("admin"), (req, res) => {
    res.json({ message: `User details for ${req.params.id}` });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
