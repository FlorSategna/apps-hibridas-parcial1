import mongoose from 'mongoose';
const genreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        trim: true,
        unique: true,
        minlength: 3,
        maxlength: 64
    },
    active: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Genre = mongoose.model('genre', genreSchema);
export default Genre;