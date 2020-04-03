import { Router } from "express";

import infoRoutes from "./routes/info";
import questionRoutes from "./routes/question";

/**
 * Contains all API routes for the application.
 */
const router = Router();

/**
 * GET /api
 */
router.get("/", (req, res) => {
  res.json({
    app: req.app.locals.title,
    apiVersion: req.app.locals.version
  });
});

router.use("/questions", questionRoutes);

router.use("/info", infoRoutes);

export default router;
