const pool = require("../../config/db");
const jwt = require("jsonwebtoken");
const express = require("express");
const bcrypt = require("bcrypt");
const utils = require("./utils");
const router = express.Router();

router.post("/register", async (req, res) => {
    const client = await pool.connect();

    try {
        const { email, name, cpf, password } = req.body;

        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashedPassword = bcrypt.hashSync(password, salt);

        const userExists = await client.query(utils.checkUser(email, cpf));
        if (userExists.rows.length > 0) {
            return res.status(400).json({ error: "User already exists" });
        }

        console.log('registering user', email, name, cpf, hashedPassword);

        const newUser = await client.query(utils.register(email, name, cpf, hashedPassword));
        res.json({ message: "User created", user: newUser.rows[0] });
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" });
    } finally {
        client.release();
    }
});

router.post("/login", async (req, res) => {
    const client = await pool.connect();

    try {
        const { email, password } = req.body;

        const result = await client.query(utils.login(email));
        if (result.rows.length > 0) {
            const user = result.rows[0];
            const isPasswordCorrect = bcrypt.compareSync(password, user.password);
            if (isPasswordCorrect) {
                const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET);
                return res.json({ token, user });
            } else {
                return res.status(400).json({ error: "Password is incorrect" });
            }
        } else {
            return res.status(400).json({ error: "Email does not exist" });
        }
    } catch (err) {
        console.error("Error:", err.message);
        return res.status(500).json({ error: "Internal Server Error" });
    } finally {
        client.release();
    }
});

router.put("/edit/:id", async (req, res) => {

    const client = await pool.connect();

    try {
        const { id } = req.params;

        const { email, name, password } = req.body;

        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);

        const hashedPassword = bcrypt.hashSync(password, salt);

        client.query(utils.edit(id, email, name, hashedPassword)).then((result) => { res.json(result.rows[0]) }).catch((err) => { res.status(400).json(err) });

        client.release();
    } catch (err) {
        res.json(err);
        client.release();
    }

});

router.get("/getuser/:id", async (req, res) => {

    const client = await pool.connect();

    try {
        const { id } = req.params;

        client.query(utils.getUser(id)).then((result) => { res.json(result.rows[0]) }).catch((err) => { res.status(400).json(err) });

        client.release();
    } catch (err) {
        res.json(err);
        client.release();
    }

});

module.exports = router;