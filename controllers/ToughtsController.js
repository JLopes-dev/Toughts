const User = require('../models/User');
const Toughts = require('../models/Tought');

class ToughtsController {

    static showToughts = async (req, res) => {
        res.render('toughts/home');
    }

}

module.exports = ToughtsController;