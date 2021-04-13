const User = require('../models/User');
const bcrypt = require('bcrypt');

const getUser = async (req, res) => {
    try{            
        const user = await User.getUser(req.params.id);
        res.render('user', {title: `${user.firstname}'s Page`, user});
    } catch {
        res.sendStatus(500);
    }
}

const addUser = async (req, res) => {
    try {
        let {firstname, lastname, email, birthday, password} = req.body;
        bcrypt.hash(password, 10, async (err, hash) => {
            if(err) throw new Error(err);
            const user = await User.addUser(firstname, lastname, email, birthday, hash);
            res.redirect(`/users/${user.id}`);
            req.session = user;
        });
    } catch {
        res.sendStatus(500);
    }
}

const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body
        const user = await User.findUser(email);
        const match = await bcrypt.compare(password, user.encrypted_password);
        if(match){
            req.session.user = user;
            res.redirect(`/users/${user.id}`);
        } else {
            res.redirect('/signin');
        }
    } catch {
        res.sendStatus(500);
    }
}

module.exports = {
    getUser,
    addUser,
    loginUser
}