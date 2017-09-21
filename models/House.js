var mongoose = require('mongoose');

var HouseSchema = new mongoose.Schema({
  name: { type: String, select: true, required: true },
  homeCode: {
        type: Number,
        select: true,
        required: true,
    },
  users: [{type: mongoose.Schema.Types.ObjectId, ref:'User', select: true}]
});

module.exports = mongoose.model('House', HouseSchema);
