import "dotenv/config";
import express from "express";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";
import { inngest, functions } from "./inngest/index.js";
import { serve } from "inngest/express";
import adminRouter from "./routes/adminRoutes.js";
import listingRouter from "./routes/listingRoutes.js";
import chatRouter from "./routes/chatRoutes.js";
import { stripeWebhook } from "./controllers/stripeWebhook.js";

const app = express();

// Stripe Webhooks Route
app.use('/api/stripe', express.raw({type: 'application/json'}), stripeWebhook)

// Middlewares
app.use(express.json());
app.use(cors());
app.use(clerkMiddleware());app.use(clerkMiddleware({
  secretKey: process.env.CLERK_SECRET_KEY,   // 🔥 ADD THIS
}));

app.get("/", (req, res) => res.send("Server is live!"));

// Webhooks
app.use("/api/inngest", serve({ client: inngest, functions }));

// Routes
app.use("/api/admin", adminRouter);
app.use("/api/listing", listingRouter);
app.use("/api/chat", chatRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
