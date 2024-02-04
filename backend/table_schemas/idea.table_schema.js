import mongoose from 'mongoose';

const { Schema } = mongoose;
const bidSchema = new Schema({
    id:{
        type:String,
        require:true,
    },
    name: {
        type: String,
        require:true,
    },
    amount:{
        type: Number,
        require: true,
    }
});
const ideaschema = new Schema({
    created_by:{
        type: String,
        require:false,
    },
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
    ideaStatus:{
        type:Boolean,
        require:false,
        default:false,
    },
    totalBids:[bidSchema],
    confirmedBids:[bidSchema]
},
{
    timestamps: true,
  }
)

export default mongoose.model("Idea", ideaschema);