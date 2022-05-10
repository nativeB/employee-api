
import { Router } from "express";

const router = Router();

router.get("/health", (_,res)=>{
    res.send("hello")
});

export default router;