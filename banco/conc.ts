import mongoose from "mongoose";
const mongo = mongoose.connect(process.env.URI as string).then(() => {
  console.log("Conectado ao MongoDB");
})
.catch((err) => {
  console.log("Erro ao conectar ao MongoDB", err);
})
export default mongo;