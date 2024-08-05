import { Router } from "express";
import { getMotivacionalPhrase } from "../controllers/phrases-controller";

const phrasesRouter = Router();

phrasesRouter.get("/phrases", getMotivacionalPhrase);

export default phrasesRouter;