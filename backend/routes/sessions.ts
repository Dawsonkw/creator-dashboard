import { Router } from "express";
import { getSessions } from "../services/sessionService";

const router = Router();

router.get("/", async (req, res) => {
    try {
        const sessions = await getSessions();
        res.json(sessions);        
    } catch (error) {
        console.error("Error fetching sessions:", error);
        res.status(500).json({ error: "Failed to fetch sessions" });
    }
});

export default router;