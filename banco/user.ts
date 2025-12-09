import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  nome: {
    type: String,
  },
  senha: {
    string: String
  },
  saldo: {
    type: Number
  }
});
export const User = mongoose.model("User", UserSchema);