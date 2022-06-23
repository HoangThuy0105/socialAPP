import mongoose from "mongoose";

const schema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        maxlength: 50,
    },
    lastName: {
        type: String,
        required: true,
        maxlength: 50,
    },
    email: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 50,
        unique: true,
    },
    phoneNumber: {
        type: String,
        required: false,
        minlength: 10,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    avatar: {
        type: String,
        default: '',
    },
    followers: Array,
    following: Array,
    userBlock: Array,
    bio: String,
}, { timestamps: true })

export const UserModel = mongoose.model('User', schema)