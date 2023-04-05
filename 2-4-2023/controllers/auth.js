const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');
const { SECRET_KEY } = require("../data/key");
const { createUser, findUser } = require("../models/user");

exports.createUser = async (email, password) => {
    try {
        const userId = Date.now();
        const encPasword = await bcrypt.hash(password, 12);
        return await createUser(email, encPasword, userId);
    } catch (err) {
        throw err;
    }
};

exports.login = async (email, password) => {
    try {
        const user = await findUser(email);
        const result = await bcrypt.compare(password, !!user && user.password);
        if(result) {
            var token = jwt.sign({email}, SECRET_KEY, { expiresIn: '1h' });
            return {token};
        }
        return "Wrong email Id or Password";
    } catch (err) {
        throw err;
    }
};