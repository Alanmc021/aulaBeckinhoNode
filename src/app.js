const express = require("express");
const bodyParser = require("body-parser");
const admin = require("firebase-admin");

const  controllerProduto = require("./controllers/controlerProduto");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Inicializa o Firebase
const serviceAccount = require("../key.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://node-teste-6cb6e-default-rtdb.firebaseio.com"
});

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});

app.get("/produto", controllerProduto.createProduct);
 