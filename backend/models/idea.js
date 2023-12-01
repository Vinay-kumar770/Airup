const mongoose =require('mongoose');

const ideaschema = new mongoose.Schema({
    ideaname:{
        type: String,
        require:true,
    },
    problemstatement:{
        type: String,
        require:true,
    },
    onelinersolution:{
        type: String,
        require:true,
    },
    detailedsolution:{
        type: String,
        require:true,
    },
    businessmodel:{
        type: String,
        require:true,
    },
    competition:{
        type: String,
        require:true,
    },
    yourprofession:{
        type: String,
        require:true,
    },
    equity:{
        type: String,
        require:true,
    },
    amount:{
        type: String,
        require:true,
    },
    noofdays:{
        type: String,
        require:true,
    },
    debtifrequired:{
        type: String,
        require:true,
    },

})

const Idea=new mongoose.model("Idea",ideaschema);

module.exports= Idea;