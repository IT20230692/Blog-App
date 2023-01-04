const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema(
    {
       name:{
        type: 'string',
        required: true,
       },
    },
    {
        timestamps:true,
        versionKey: false, // Here You have to add.
    }
);

module.exports  = mongoose.model('Category', CategorySchema);