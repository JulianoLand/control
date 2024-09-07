import mongoose from "mongoose";

const invoiceSchema = new mongoose.Schema({
    title: String,
    price: {
        type: mongoose.Schema.Types.Decimal128,
        get: (v: mongoose.Schema.Types.Decimal128) => {
            return parseFloat(v.toString())
        }
    }
}, { toJSON: { getters: true }});

const Invoice = mongoose.models.Invoice || mongoose.model("Invoice", invoiceSchema);

export default Invoice;