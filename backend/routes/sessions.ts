import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.json([{ date: "April 10", title: "Just Chatting", duration: "3h 15m" },
        { date: "April 8", title: "Dwarf Fortress", duration: "5h 40m" },
        { date: "April 6", title: "League of Legends", duration: "2h 30m" },
    ]);
});

export default router;