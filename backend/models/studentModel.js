import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    sex: {
        type: String,
        required: true,
    },
    studentID: {
        type: Number,
        required: true,
    },
    birthdate: {
        type: String,
        required: true,
    }
});

export const Student = mongoose.model('Student', studentSchema);