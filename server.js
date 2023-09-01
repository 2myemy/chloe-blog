const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const bodyParser = require("body-parser");
const router = require("./route");
const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200
};

// app.use(cors(corsOptions));
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", router);

// app.get('/', (req, res) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.send(`Response Complate`);
// });

// app.get('/host', (req, res) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.send({ host : 'Chloe' });
// })

app.listen(PORT, () => {
  console.log(`Server running...`);
});
