import { Router } from "express";
import { getSessions } from "../services/sessionService";

const router = Router();

router.get("/", (req, res) => {
    res.json(
        getSessions()
    );
});

export default router;