import mongoose from "mongoose";

const monthSchema = new mongoose.Schema({
    month: {
        type: Date, 
        default: Date.prototype.getMonth()
    },
    invoice: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Invoice",
        }
    ]
}, { toJSON: { getters: true } });

const Month = mongoose.models.Month || mongoose.model("Month", monthSchema);

export default Month;