import Review from '../models/reviewsModel.js';
import Movie from '../models/moviesModel.js';

class ReviewsController {
    async getAll(req, res) {
        try {
            const reviews = await Review.find()
                                        .sort({ createdAt: -1 })
                                        .populate('movie');

            res.json({
                message: 'success',
                data: reviews
            });
        } catch (error) {
            res.status(500).json({
                message: 'Error al obtener las reseñas'
            });
        }
    }

    async getById(req, res) {
        try {
            const id = req.params.id;
            const review = await Review.findById(id).populate('movie');

            if (!review) {
                return res.status(404).json({
                    message: 'Reseña no encontrada',
                    data: {}
                });
            }

            res.json({
                message: 'success',
                data: review
            });
        } catch (error) {
            res.status(500).json({
                message: 'Error al obtener la reseña'
            });
        }
    }

    async getByMovie(req, res) {
        try {
            const mid = req.params.mid;
            const rating = req.query.rating;
            const filter = { movie: mid };

            if (rating) {
                filter.rating = rating;
            }

            const reviews = await Review.find(filter)
                                        .sort({ createdAt: -1 })
                                        .populate('movie');

            res.json({
                message: 'success',
                data: reviews
            });
        } catch (error) {
            res.status(500).json({
                message: 'Error al obtener las reseñas de la película'
            });
        }
    }

    async create(req, res) {
        try {
            const { movie, user, comment, rating } = req.body;

            const movieExists = await Movie.findById(movie);
            if (!movieExists) {
                return res.status(404).json({
                    message: 'La película no existe'
                });
            }

            const review = await Review.create({ movie, user, comment, rating });

            res.status(201).json({
                message: 'success',
                data: review
            });
        } catch (error) {
            res.status(500).json({
                message: `Error al crear la reseña - ${error.message}`
            });
        }
    }

    async update(req, res) {
        try {
            const id = req.params.id;
            const { user, comment, rating, active } = req.body;

            const review = await Review.findByIdAndUpdate(
                id,
                { user, comment, rating, active },
                { new: true, runValidators: true }
            );

            if (!review) {
                return res.status(404).json({
                    message: 'Reseña no encontrada'
                });
            }

            res.json({
                message: 'success',
                data: review
            });
        } catch (error) {
            res.status(500).json({
                message: 'Error al actualizar la reseña'
            });
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id;
            const review = await Review.findByIdAndDelete(id);

            if (!review) {
                return res.status(404).json({
                    message: 'Reseña no encontrada'
                });
            }

            res.json({
                message: 'success'
            });
        } catch (error) {
            res.status(500).json({
                message: 'Error al eliminar la reseña'
            });
        }
    }
}

export default ReviewsController;