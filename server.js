const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("✅ MongoDB conectado"))
  .catch(err => console.error("❌ Error al conectar con MongoDB:", err));

const itemsRoutes = require("./routes/items");
app.use("/api/items", itemsRoutes);

app.listen(PORT, () => console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`));
