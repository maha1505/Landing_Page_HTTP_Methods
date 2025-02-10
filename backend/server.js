const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const submissionRoutes = require("./routes/submissions");

const app = express();
const PORT = 5000;

app.use(cors({ origin: "http://localhost:5173" })); // Assuming Vite default port
app.use(bodyParser.json());
app.use("/api/submissions", submissionRoutes);
app._router.stack.forEach((r) => {
    if (r.route && r.route.path) {
      console.log(r.route.path);
    }
  });
  app.get("/", (req, res) => {
    res.send("Backend is running!");
  });
  
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
