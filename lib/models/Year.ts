import mongoose from "mongoose";
// const year = new Date;

const yearSchema = new mongoose.Schema({
    title:{
        type: String,
        // default: year.getFullYear(),
        unique: true,
    },
    month: [
        {
            type: mongoose.Schema.Types.Array,
            ref: "Invoice",
        }
    ]
}, { toJSON: { getters: true} });

const Year = mongoose.models.Year || mongoose.model("Year", yearSchema);

export default Year;