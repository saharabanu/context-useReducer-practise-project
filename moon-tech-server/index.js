// const express = require('express');
// const app = express();
// require("dotenv").config();
// const mongoose = require('mongoose')

// const port = process.env.PORT || 5000;

// const cors = require("cors");

// app.use(cors());
// app.use(express.json());

// // mongoose.connect(process.env.DB)
// // .then(data => {
// //     console.log(`MongoDB connected with server: ${data.connection.host}`)
// // })
// mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.2kdey3p.mongodb.net/Moon_Tech?retryWrites=true&w=majority`)
// .then(data => {
//     console.log(`MongoDB connected with server: ${data.connection.host}`)
// })

// app.get('/', (req, res) => {
//   res.send('Moon Tech Server Api!')
// })

// app.listen(port, () => {
//   console.log(`Moon Tech App is running on port ${port}`)
// })


require("dotenv").config();
const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

const cors = require("cors");

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://DevZeroOne:DevZeroOne@cluster0.2kdey3p.mongodb.net/datas?retryWrites=true&w=majority";


const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});



const run = async () => {
  try {
    const db = client.db("moontech");
    const productCollection = db.collection("product");

    app.get("/products", async (req, res) => {
      const cursor = productCollection.find({});
      const product = await cursor.toArray();

      res.send({ status: true, data: product });
    });
  } finally {
  }
};

run().catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
