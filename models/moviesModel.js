import mongoose from 'mongoose';
const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        trim: true,
        minlength: 3,
        maxlength: 128
    },
    year: {
        type: Number,
        required: [true, 'El año es obligatorio'],
        min: 1900
    },
    genre: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'genre',
        required: [true, 'El género es obligatorio'],
    },
    description: {
        type: String,
        default: "",
        maxlength: 512
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

const Movie = mongoose.model('movie', movieSchema);
export default Movie;