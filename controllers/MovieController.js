import Movie from '../models/moviesModel.js';
import Genre from '../models/genresModel.js';
import Review from '../models/reviewsModel.js';


class MovieController {
    async getAll(req, res) {
        try {
            const movies = await Movie.find()
                                     .select('title year genre');

            res.json({
                message: 'success',
                data: movies
            });
        } catch (error) {
            res.status(500).json({
                message: 'Error al obtener las películas'
            });
        }
    }

    async getById(req, res) {
        try {
            const mid = req.params.mid;
            const movie = await Movie.findById(mid).populate('genre');

            if (!movie) {
                return res.status(404).json({
                    message: 'Película no encontrada',
                    data: {}
                });
            }

            res.json({
                message: 'success',
                data: movie
            });
        } catch (error) {
            res.status(500).json({
                message: 'Error al obtener la película'
            });
        }
    }

    async getReviewsByMovie(req, res) {
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
                message: 'Error al obtener las reseñas'
            });
        }
    }

    async getFiltered(req, res) {
        try {
            const { year, genre } = req.query;
            const filter = {};

            if (year) {
                filter.year = Number(year);
            }
            if (genre) {
                filter.genre = genre;
            }

            const movies = await Movie.find(filter).populate('genre');

            res.json({
                message: 'success',
                data: movies
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: 'Error al filtrar películas', error: error.message
            });
        }
    }

    async searchByName(req, res) {
        try {
            const { name } = req.query;

            if (!name) {
                return res.status(400).json({
                    message: 'Se debe ingresar un nombre para buscar'
                });
            }

            const movies = await Movie.find({ title: name }).populate('genre');

            res.json({
                message: 'success',
                data: movies
            });
        } catch (error) {
            res.status(500).json({
                message: 'Error al buscar películas por nombre'
            });
        }
    }

    async create(req, res) {
        try {
            const {title, year, genre, description} = req.body;
            const movie = await Movie.create({title, year, genre, description});

            res.status(201).json({
                message: 'success',
                data: movie
            });
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    async update(req, res) {
        try {
            const id = req.params.mid;
            const {title, year, genre, description} = req.body;

            const movie = await Movie.findByIdAndUpdate(
                id,
                {title, year, genre, description},
                { new: true, runValidators: true }
            );

            if (!movie) {
                return res.status(404).json({
                    message: 'Película no encontrada'
                });
            }

            res.json({
                message: 'success',
                data: movie
            });
        } catch (error) {
            res.status(500).json({
                message: 'Error al actualizar la película'
            });
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.mid;

            // No permitir eliminar películas con reseñas asociadas
            const reviews = await Review.find({ movie: id });
            if (reviews.length > 0) {
                return res.status(400).json({
                    message: 'No es posible eliminar una película con reseñas'
                });
            }

            const exists = await Movie.findByIdAndDelete(id);

            if (!exists) {
                return res.status(404).json({
                    message: 'Película no encontrada'
                });
            }

            res.json({
                message: 'success'
            });
        } catch (error) {
            res.status(500).json({
                message: 'Error al eliminar la película'
            });
        }
    }
}

export default MovieController;