const User = require('../models/User');

const getUser = async (req, res) => {
    try{            
        const user = await User.getUser(req.params.id);
        res.render('user', {title: `${user.firstname}'s Page`, user});
    } catch {
        res.sendStatus(500);
    }
}

module.exports = {
    getUser,
}