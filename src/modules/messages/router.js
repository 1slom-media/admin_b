import { Router } from "express";
import controller from "./controller.js";

const router = Router();

router.get("/messages", controller.GET);
router.get("/messages/:msgId", controller.GET);
router.post("/messages",controller.POST);
router.put("/messages/:msgId",controller.PUT);
router.delete("/messages/:msgId", controller.DELETE);


export default router;