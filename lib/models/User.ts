import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    clerkId: String,
    month: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Month",
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updateAt: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;