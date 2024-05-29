import * as express from "express";
import { getAll, store } from "./aluno.model";

const router = express.Router();

router.get("/", async (_, res) => {
  const data = await getAll();
  return res.status(200).json({ data });
});

router.post("/", async (req, res) => {
  const data = await store(req.body);
  return res.status(200).json({ data });
});

export default router;
