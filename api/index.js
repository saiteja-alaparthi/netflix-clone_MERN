const express = require("express");
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const movieRoute = require("./routes/movies")
const listRoute = require("./routes/lists")
dotenv.config()

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

    }).then(()=> console.log("DB Connection Successful"))
    .catch((err)  => console.log(err));

    app.use(express.json());

app.use('/api/auth',authRoute)
app.use('/api/users',userRoute)
app.use('/api/movies',movieRoute)
app.use('/api/lists',listRoute)

// Add this test route
app.get("/test", (req, res) => {
  res.json("server is working");
});

app.listen(8800, ()=> {
    console.log("Backend server is running")
});

