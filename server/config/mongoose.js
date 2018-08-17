mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/team_manager');
mongoose.Promise = global.Promise;