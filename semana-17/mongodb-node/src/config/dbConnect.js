import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://karinebrandellipadilha:2505Kbp@cluster0.h0fh7dn.mongodb.net/alura-node"
);

let db = mongoose.connection;

export default db;
