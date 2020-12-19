const express = require("express");
const app = express();
const cors = require('cors')

const { graphqlHTTP } = require('express-graphql');
const schema = require("./schema/schema");



require("dotenv").config();

const connectDB = require("./models/connectDB");
const router = require("./routes/router");

connectDB();

app.use(cors())

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));



app.use(express.json());
app.use("/api", router);

// production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`I'm listening on port ${port}`);
});
