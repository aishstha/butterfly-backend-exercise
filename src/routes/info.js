import { Router } from "express";

import * as infoController from "../controllers/info";

const router = Router();

/**
 * GET /api/info
 */
router.get("/", infoController.fetchCompanyInformation);

export default router;
