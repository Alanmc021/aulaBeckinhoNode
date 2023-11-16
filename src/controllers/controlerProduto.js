const productService = require("../services/productService");

async function createProduct(req, res) {
    try {
		const response = await productService.createProduct ;
        res.status(200).json("tudo funcionado, player sendo pego pelo ai");
	} catch (err) {
		console.error(err);
		res.status(500).send("Error retrieving users from database");
	}
} 

module.exports = {
	createProduct,	 
};