import mongoose from 'mongoose';

const { Schema } = mongoose;

// Define the schema for bids
const bidSchema = new Schema({
    id: {
        type: String,
        required: true, // Corrected from 'require' to 'required'
    },
    name: {
        type: String,
        required: true, // Corrected from 'require' to 'required'
    },
    amount: {
        type: Number,
        required: true, // Corrected from 'require' to 'required'
    },
    status: {
        type: Boolean,
        default:false,
        required: false, // It's okay to explicitly state this, but it's not necessary unless you want to enforce clarity
    }
});

// Define the schema for ideas
const ideaSchema = new Schema({
    created_by: {
        type: String,
        required: false, // Corrected from 'require' to 'required'
    },
    ideaName: {
        type: String,
        required: true,
    },
    problemStatement: {
        type: String,
        required: true,
    },
    oneLinerSolution: {
        type: String,
        required: true,
    },
    detailedSolution: {
        type: String,
        required: true,
    },
    businessModel: {
        type: String,
        required: true,
    },
    competition: {
        type: String,
        required: true,
    },
    yourProfession: {
        type: String,
        required: true,
    },
    equity: {
        type: String,
        required: true,
    },
    amount: {
        type: String,
        required: true,
    },
    noOfDays: {
        type: String,
        required: true,
    },
    debtIfRequired: {
        type: String,
        required: true,
    },
    ideaStatus: {
        type: Boolean,
        required: false,
        default: false,
    },
    totalBids: [bidSchema],
    confirmedBids: [bidSchema]
}, {
    timestamps: true,
});

// Export the model, with the name "Idea" based on the ideaSchema
export default mongoose.model("Idea", ideaSchema);
