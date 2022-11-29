const express = require('express');
const app = express();
require("dotenv").config();
const mongoose = require('mongoose')

const port = process.env.PORT || 5000;

const cors = require("cors");

app.use(cors());
app.use(express.json());

// mongoose.connect(process.env.DB)
// .then(data => {
//     console.log(`MongoDB connected with server: ${data.connection.host}`)
// })
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.2kdey3p.mongodb.net/Moon_Tech?retryWrites=true&w=majority`)
.then(data => {
    console.log(`MongoDB connected with server: ${data.connection.host}`)
})

app.get('/', (req, res) => {
  res.send('Moon Tech Server Api!')
})

app.listen(port, () => {
  console.log(`Moon Tech App is running on port ${port}`)
})


