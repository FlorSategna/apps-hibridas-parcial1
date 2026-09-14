import mongoose from 'mongoose';
const reviewSchema = new mongoose.Schema({
    movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'movie',
        required: [true, 'La película de referencia es obligatoria']
    },
    user: {
        type: String,
        required: [true, 'El nombre de usuario es obligatorio'],
        trim: true,
        minlength: 3,
        maxlength: 64
    },
    comment: {
        type: String,
        trim: true,
        maxlength: 256
    },
    rating: {
        type: Number,
        required: [true, 'El puntaje es obligatorio'],
        min: 1,
        max: 5
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

const Review = mongoose.model('review', reviewSchema);
export default Review;