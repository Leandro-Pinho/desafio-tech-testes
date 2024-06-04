import * as express from "express";
import alunoFactory from "./aluno.factory";
import { sum } from "../../libs/sum";

const router = express.Router();

router.get("/", async (_, res) => {
  const data = await alunoFactory.getAll();
  return res.status(200).json({ data });
});

router.post("/", async (req, res) => {
  const data = await alunoFactory.store(req.body);
  return res.status(200).json({ data });
});

router.post("/sum", async (req, res) => {
  const response = sum(req.body.a, req.body.b);
  return res.status(200).json(response);
});

router.get('/teste', (_, res)=> {
  return res.status(200).send('funcionou')
})

export default router;
