import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
    participants: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
        }
    ],
    messages: [
        {
        type: String
        }
    ]
}, { timestamps: true });

const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;
