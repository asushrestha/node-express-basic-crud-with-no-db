
const express = require("express");
const userRoute = require("./routes/users")
const app = express();
const PORT = 5000;

app.use(express.json());
// app.use(express.urlencoded());


app.use("/users",userRoute);

app.listen(PORT,()=> console.log(`Server running on: http://localhost:${PORT}`));