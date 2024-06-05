import * as express from "express";
import alunoFactory from "./aluno.factory";
import { sum } from "../../libs/sum";

const router = express.Router();

router.get("/", async (_, res) => {
  try {
    const data = await alunoFactory.getAll();
    return res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ msg: "erro no servidor" });
  }
});

router.post("/", async (req, res) => {
  try {
    if (!req.body.nome || !req.body.cpf) {
      return res.status(400).json({ msg: "Nome e CPF são obrigatorios" });
    }
    const data = await alunoFactory.store(req.body);
    return res.status(201).json({ data });
  } catch (error) {
    res.status(500).json({ msg: "erro no servidor" });
  }
});


export default router;
