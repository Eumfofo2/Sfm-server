import express from "express";
import { User } from "./banco/user.js";
import * as m from "./banco/conc.js";

const app = express();

app.use(express.json());

app.post("/login", async (req, res) => {
  try {
    const { nome, senha } = req.body;
    if (!nome || !senha) {
      return res.status(400).json({ message: "nome ou a senha estao incorretas" });
    }
    const pessoa = await User.findOne({ nome: nome });
    if (!pessoa) {
      return res.status(404).json({ message: "sem sucesso usuario achado" });
    }
    if (pessoa.senha !== senha) {
      return res.status(401).json({ message: "Senha incorreta" });
    }
    return res.status(200).json({
      message: "Login bem-sucedido",
      pessoa: pessoa,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro interno no servidor" });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor rodando na porta", process.env.PORT || 3000);
});