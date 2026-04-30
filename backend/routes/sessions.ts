import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.json([{ id: "1", date: "April 10", title: "Just Chatting", duration: "3h 15m" },
        { id: "2", date: "April 8", title: "Dwarf Fortress", duration: "5h 40m" },
        { id: "3", date: "April 6", title: "League of Legends", duration: "2h 30m" },
        { id: "4", date: "April 4", title: "Minecraft", duration: "4h 10m" },
        { id: "5", date: "April 2", title: "Baldur's Gate 3", duration: "3h 50m" }
    ]);
});

export default router;