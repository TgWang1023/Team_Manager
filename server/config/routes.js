const players = require('../controllers/players.js');
module.exports = function(app) {
    app.get('/players', function(req, res) {
        players.all(req, res);
    });
    app.get('/players/:id', function(req, res) {
        players.one(req, res);
    });
    app.post('/players', function(req, res) {
        players.create(req, res);
    });
    app.put('/players/:id', function(req, res) {
        players.update(req, res);
    });
    app.delete('/players/:id', function(req, res) {
        players.remove(req, res);
    });
}