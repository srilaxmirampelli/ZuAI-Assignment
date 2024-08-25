const express = require("express");
const cors = require("cors");
const postRoutes = require("./routes/postRoutes");

const app = express();

app.use(express.json());
app.use(cors());

let PORT = 3001;

app.use(postRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
