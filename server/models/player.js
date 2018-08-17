const PlayerSchema = new mongoose.Schema({
    name: {type: String, required: [true, 'Player name cannot be empty!'], minlength: [2, 'Player name must be at least 2 characters long!']},
    position: {type: String},
    status_1: {type: String, default: 'undecided'},
    status_2: {type: String, default: 'undecided'},
    status_3: {type: String, default: 'undecided'},
}, {timestamps: true});
mongoose.model('Player', PlayerSchema);
Player = mongoose.model('Player');