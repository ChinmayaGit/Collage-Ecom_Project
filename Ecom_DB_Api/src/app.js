const express = require("express");
require("./db/conn");
const Product = require("./models/products");
const Signup = require("./models/signup");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

//signup 
app.post("/signup", async (req, res) => {
    try {
        const signup = new Signup(req.body);
        const token = await signup.generateAuthToken();

        console.log("token part"+token);
        const signupUser = await signup.save();

        res.status(201).send(token);
    } catch (e) { res.status(400).send(e); }
})

//signin 
app.post("/signin", async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const userEmail = await Signup.findOne({ email: email });

        if (email === userEmail.email) {
            if (password === userEmail.password) {
                res.send(userEmail);
                console.log(userEmail);
            } else {
                res.status(400).send("Invalid Details");
            }
        } else {
            res.status(400).send("Invalid Details");
        }
    } catch (e) { res.status(400).send(e); }
   
})

app.post("/prods", async (req, res) => {
    try {
        const prod = new Product(req.body);
        const createProd = await prod.save();
        res.status(201).send(createProd);
    } catch (e) { res.status(400).send(e); }
})

app.get("/prods", async (req, res) => {
    try {
        const prodData = await Product.find();
        res.status(200).json(
            {data: prodData,
            total: prodData.length}
        );
    } catch (e) { res.status(400).send(e); }

})

app.get("/prods/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const prodData = await Product.findById(_id);
        if (!prodData) {
            res.status(404).send();
        } else {
            res.send(prodData);
        }
    } catch (e) { res.status(500).send(e); }
})

app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
})    