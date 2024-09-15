import mongoose from "mongoose";

// const today = new Date();

const monthSchema = new mongoose.Schema({
    title: String,
})

const yearSchema = new mongoose.Schema({
    title: String,
    type: Date,
    month:[monthSchema],
})

const userSchema = new mongoose.Schema({
    clerkId: String,
    year:{yearSchema},
});
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;