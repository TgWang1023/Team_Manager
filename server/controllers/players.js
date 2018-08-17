require('../models/player.js');
module.exports = {
    all: function(req, res){
        Player.find({}).sort('-createdAt').exec(function(err, players){
            if(err){
                console.log('Something went wrong when getting all players');
                res.json({message: 'Error', error: err});
            }else{
                res.json({message: 'Success', data: players});
            }
        });
    },
    one: function(req, res){
        Player.findOne({_id: req.params.id}, function(err, player){
            if(err){
                console.log('Something went wrong when getting a single player');
                res.json({message: 'Error', error: err});
            }else{
                res.json({message: 'Success', data: player});
            }
        });
    },
    create: function(req, res){
        Player.create(req.body, function(err){
            if(err){
                console.log('Something went wrong when creating a player, detail: ', err);
                res.json({message: 'Error', error: err});
            }else{
                res.redirect('/players');
            }
        });
    },
    update: function(req, res){
        Player.findByIdAndUpdate({_id: req.params.id}, {$set: req.body}, { runValidators: true }, function(err){
            if(err){
                console.log('Something went wrong when updating a player, detail: ', err);
                res.json({message: 'Error', error: err});
            }else{
                res.redirect(303, '/players');
            }
        });
    },
    remove: function(req, res){
        Player.findOneAndRemove({_id: req.params.id}, function(err){
            if(err){
                console.log('Something went wrong when updating a player');
                res.json({message: 'Error', error: err});
            }else{
                Player.find({}, function(err, players){
                    if(err){
                        console.log('Something went wrong when getting all players');
                        res.json({message: 'Error', error: err});
                    }else{
                        res.json({message: 'Success', data: players});
                    }
                });
            }
        });
    }
}